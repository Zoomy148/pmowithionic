import { Component, OnInit } from '@angular/core';
import { GetInfoService } from 'src/app/services/get-info.service';
import { Project } from 'src/app/services/project.model';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  editMode: boolean = false;
  userId: string;
  vacancyId: string;
  projectName: string;
  projectList = [];
  project: Project = {
    id: '',
    name: '',
    leader: '',
    position: '',
    comments: '',
    part: ''
  };
  constructor(private getProjectsService: GetInfoService,
              private route: ActivatedRoute,
              public alertController: AlertController) { }

  ngOnInit() {
    this.getProjectsService.searchProject().subscribe(data => {

      this.projectList = data;
    }, error => {
      console.log(error);
      }
    );
    this.route.paramMap.subscribe( params =>{
      this.userId = params.get('userId');
    });
  }
  onEditMode() {
    this.editMode = !this.editMode;
  }
  addProject() {
      this.project.name = this.projectName;
      this.projectList.push(this.project);
      this.projectName = '';
  }
  deleteProject(id: number) {
    this.projectList.splice(id, 1);
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
            this.deleteProject(id);
          }
        }
      ]
    });
    await alert.present();
  }
}
