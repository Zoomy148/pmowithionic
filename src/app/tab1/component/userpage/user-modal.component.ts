import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'user-modal',
  templateUrl: './user-modal.component.html',

})
export class UserModalComponent  {
  stage = {
    month:  '',
    projectname: '',
    busy: ''
  }
  url = 'assets/data/status-stage-data.json';
  constructor(private mdlCntrl: ModalController,
              public http: HttpClient,
              public router: Router) { }
  async close(){
    await this.mdlCntrl.dismiss(this.stage);
  }


}
