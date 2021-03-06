import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './modalPage.component';

@Component({
  selector: 'app-commerce',
  templateUrl: './commerce.component.html',
  styleUrls: ['./commerce.component.scss'],
})
export class CommerceComponent implements OnInit {
 
  constructor(private location: Location, public modalController: ModalController) { }
  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
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
}
