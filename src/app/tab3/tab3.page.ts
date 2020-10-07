import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../services/get-info.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  slotToShow: string = 'new_vacancy'
  vacancyList: any;
  userList: any;
  constructor(private getVacancyService: GetInfoService){}
  
  segmentChanged(ev: any){
    console.log(ev.detail.value);
    this.slotToShow = ev.detail.value;
  }

  ngOnInit(){
    this.getVacancyService.searchVacancy().subscribe((data) => 
    {
      this.vacancyList = data;
      console.log(this.vacancyList);
    });
    this.getVacancyService.search().subscribe((data) =>
    {
      this.userList = data;
    });
  }

}
