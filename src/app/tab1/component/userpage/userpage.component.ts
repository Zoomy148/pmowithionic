import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/services/employee.model';
import { GetInfoService } from 'src/app/services/get-info.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss'],
})
export class UserpageComponent implements OnInit {
  user: any;
  newExp: string = '';
  editExp: boolean = false;
  constructor(private route: ActivatedRoute,
              private getUserService: GetInfoService,
              public alertController: AlertController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getUserService.search().subscribe(data =>{
        this.user = data[+params.get('userId')];
      })
    }) 
  }
  editExperience(){
    this.editExp = !this.editExp;
  }

  addExp(){
    this.user.experience.push(this.newExp);
    this.newExp = '';
  }

  deleteExp(id: number){
    this.user.experience.splice(id, 1);
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
