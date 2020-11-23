import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetInfoService } from 'src/app/services/get-info.service';
import { AlertController } from '@ionic/angular';
import {Location} from '@angular/common';
import { ModalController , } from '@ionic/angular';
import {UserModalComponent} from './user-modal.component';
import {environment} from '../../../../environments/environment';



@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss'],
})
export class UserpageComponent implements OnInit {
  mobile: boolean = environment.mobile;
  desktop: boolean = environment.desktop;
  public barChartLabels = [[],[],[],[]];
  public barChartType = 'doughnut';
  public barChartLegend = true;
  public barChartData = [
    {data: []}
  ];
  public barChartOptions: any = {
    legend: {position: 'left'}
  };
  hours = [];
  projects: [];
  users: any;
  user = [];
  value = [];
  newExp: string = '';
  editExp: boolean = false;
  number: string;
  editProfile: boolean = true;
  constructor(private route: ActivatedRoute,
              private getUserService: GetInfoService,
              public alertController: AlertController,
              private location: Location,
              public modalController: ModalController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.number = params.get('userId'));
    this.getUserService.search().subscribe(data => {
      this.user = data.filter( vacancy => this.number === vacancy.id );
      this.users = data.filter( vacancy => this.number === vacancy.id );
      for(let i = 0 ; i < this.user.length ; i++){
        for (let k = 0 ; k < this.user[i].activity.length ; k++){
          for ( let j = 0; j < this.user[i].activity[k].project.length; j++){
            this.barChartLabels[k].push(this.user[i].activity[k].project[j].projectname);
            console.log('projectname' in this.users[0].activity[0].project[0]);
          }
        }
      }
    });
    this.getUserService.searchProject().subscribe(projectData => {
      this.projects = projectData;
      this.hours = this.projects.map((el) => {
        return el['part'];
      });
      this.barChartData = [{data: [parseInt(this.hours[0]), parseInt(this.hours[1]), parseInt(this.hours[2])]}];
    });
  }
  editExperience() {
    this.editExp = !this.editExp;
  }
  editingProfile() {
    this.editProfile = !this.editProfile;
  }
  goBack() {
    this.location.back();
  }
  addExp() {
    this.users.experience.push(this.newExp);
    this.newExp = '';
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: UserModalComponent,
      cssClass: 'my-custom-class',
    });
    modal.onDidDismiss()
        .then((data) => {
          const user = data; // Here's your selected user!
          console.log(user);
        });
    return await modal.present();
  }
  showModal() {
    this.presentModal();
  }
  deleteExp(id: number){
    this.users.experience.splice(id, 1);
  }
  async presentAlert(id: number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Вы действительно хотите удалить элемент из списка?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.deleteExp(id);
          }
        }
      ]
    });
    await alert.present();
  }
}
