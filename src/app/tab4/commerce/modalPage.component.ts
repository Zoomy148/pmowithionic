import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'modal-page',
  templateUrl: './modalPage.component.html'
})
export class ModalPage {
    stage = {
        name:  '',
        stage_status: '',
        act_status: '',
        requisites: '',
        stage_deadline: '',
        signing_date: '',
        sum_of_stage: '',
        sum_subcontractor: '',
        total: '',
        contract_payment_date: '',
        actual_payment_date: '',
        stage_comments: '',
        stage_problems: ''
    }
    
    constructor(private mdlCntrl: ModalController) {}
    async close(){
        await this.mdlCntrl.dismiss(this.stage);
    }
}