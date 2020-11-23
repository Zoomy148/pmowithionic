import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ModalController , } from '@ionic/angular';
import { ModalPage } from './modalPage.component';
import {GetInfoService} from '../../services/get-info.service';
import {Observable, Subscription} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { environment} from '../../../environments/environment';
import {CommerceActiveProject} from '../../models/CommerceActivProject-model';
import {ComponentCanDeactivate} from '../../guards/exit.guard';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-commerce',
  templateUrl: './commerce.component.html',
  styleUrls: ['./commerce.component.scss'],
})
export class CommerceComponent implements OnInit, ComponentCanDeactivate {
  constructor( private location: Location,
               public modalController: ModalController,
               public dataService: GetInfoService,
               public activateRoute: ActivatedRoute,
               public alertController: AlertController
              ) {
    this.subscription = activateRoute.params.subscribe(params => this.number = params['number']);
  }
  commerceActiveProject: CommerceActiveProject[];
  number: number;
  public subscription: Subscription;
  mobile: boolean = environment.mobile;
  desktop: boolean = environment.desktop;
  saved: boolean = true;
  edit: boolean = true;
  ngOnInit() {
    this.dataService.getCommerceActiveProject().subscribe((data) =>
    {
      this.commerceActiveProject = data;
      console.log(this.commerceActiveProject);
    });
  }
  goBack(){
    this.location.back();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      showBackdrop: true,
      backdropDismiss: false,
    });
    modal.onDidDismiss()
    .then((data) => {
      const user = data; // Here's your selected user!
      console.log(user);
  });
    return await modal.present();
  }
  showModal(){
    this.presentModal();
  }
  save(){
    this.saved = !this.saved;
  }
  editting(){
    this.edit = !this.edit;
  }
  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved){
      return confirm('Вы хотите покинуть страницу?');
    }
    else{
      return true;
    }
  }
}
