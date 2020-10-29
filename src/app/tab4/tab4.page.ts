import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { GetInfoService} from '../services/get-info.service';
import { environment} from '../../environments/environment';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page implements OnInit{
  @ViewChild('presale', {static: false}) presale: ElementRef;
  searchStr: string = '';
  mobile: boolean = environment.mobile;
  desktop: boolean = environment.desktop;
  date: boolean = false;
  commerceProjectData: CommerceProjectModel;
  presaleProjectData: any;
  stageData: StageModel;
  slotToShow: string = 'presale';
  tabToShow: string = 'archive';
  tabToShowCommerce: string = 'arciveCommerce';
  selectValue = [];
  constructor(private router: Router ,
              public  dataService: GetInfoService,
              ) {}
  segmentChanged(ev: any) {
      console.log(ev.detail.value);
      this.slotToShow = ev.detail.value;
  }
  tabChanged(ev: any) {
      console.log(ev.detail.value);
      this.tabToShow = ev.detail.value;
  }
  tabCommerceChange(ev: any) {
        console.log(ev.detail.value);
        this.tabToShowCommerce = ev.detail.value;
  }
  goToDetails(num: number){
    this.router.navigate(['/tabs/tab4/presale/' + num]);
  }
  goToCommercePage(num: number){
    this.router.navigate(['/tabs/tab4/commerce/' + num]);
  }
  changeFilters() {
      if (this.selectValue.length === 0) {
          this.dataService.searchPresaleProject().subscribe((data) =>
             {
                 this.presaleProjectData = data;
             });
      }
     else {
          this.presaleProjectData = this.presaleProjectData.filter( value =>
          this.selectValue[0] === value.stage || this.selectValue[1] === value.stage);
          console.log(this.selectValue);
        }
  }
  chooseDate() {
      this.date = !this.date;
  }
  ngOnInit() {
    this.dataService.searchProject().subscribe((data) =>
   {
     this.commerceProjectData = data;
   });
    this.dataService.searchStage().subscribe((datas) =>
    {
      this.stageData = datas.slice(datas.length - 1);
    });
    this.dataService.searchPresaleProject().subscribe((data) =>
    {
      this.presaleProjectData = data;
    });
  }
}
