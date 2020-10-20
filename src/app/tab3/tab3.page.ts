import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../services/get-info.service';
import { environment} from '../../environments/environment';
import {Router} from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  mobile: boolean = environment.mobile;
  desktop: boolean = environment.desktop;
  slotToShow: string = 'new_vacancy';
  vacancyList: any;
  userList: any;
  constructor(private getVacancyService: GetInfoService,
              private router: Router){}
  segmentChanged(ev: any){
    console.log(ev.detail.value);
    this.slotToShow = ev.detail.value;
  }

  ngOnInit(){
    this.getVacancyService.searchVacancy().subscribe((data) =>
    {
      this.vacancyList = data;
    });
    this.getVacancyService.search().subscribe((data) =>
    {
      this.userList = data.filter(n => [0].includes(n.free));
    });
  }

}
