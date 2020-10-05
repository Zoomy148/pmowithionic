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
  public barChartLabels = [];
  public barChartType = 'doughnut';
  public barChartLegend = true;
  public barChartData = [
    {data: []}
  ];
  public barChartOptions:any = {
    legend: {position: 'left'}
  }
  hours = [];
  projects: [];
  users: [];
  user: any;
  newExp: string = '';
  editExp: boolean = false;
  constructor(private route: ActivatedRoute,
              private getUserService: GetInfoService,
              public alertController: AlertController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getUserService.search().subscribe(data =>{
        console.log(data);
        this.user = data[+params.get('userId')];
      })
    })
    this.getUserService.search().subscribe((userData) =>
    {
      this.users = userData;
    });
    this.getUserService.searchProject().subscribe(projectData =>{
      this.projects = projectData;
      this.barChartLabels = this.projects.map((el) => {
        return el['name'];
      })
      this.hours = this.projects.map((el) => {
        return el['part'];
      })
      this.barChartData = [{data: [parseInt(this.hours[0]), parseInt(this.hours[1]), parseInt(this.hours[2])]}];
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
