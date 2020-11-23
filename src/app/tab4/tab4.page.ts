import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { GetInfoService} from '../services/get-info.service';
import { environment} from '../../environments/environment';
import {CommerceActiveProject} from '../models/CommerceActivProject-model';
import {CommerceArchiveProject} from '../models/CommerceArchiveProject-model';
import {PresaleActiveProject} from '../models/PresaleActiveProject-model';
import {PresaleArchiveProject} from '../models/PresaleArchiveProject-model';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page implements OnInit {
  @ViewChild('presale', {static: false}) presale: ElementRef;
  searchStr: string = '';
  mobile: boolean = environment.mobile;
  desktop: boolean = environment.desktop;
  date: boolean = false;
  commerceActiveProjectData: Array<CommerceActiveProject>;
  commerceArchiveProjectData: Array<CommerceArchiveProject>;
  presaleActiveProjectData: Array<PresaleActiveProject>;
  presaleArchiveProjectData: Array<PresaleArchiveProject>;
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
  goToDetails(num: number) {
    this.router.navigate(['/tabs/tab4/presale/' + num]);
  }
  goToCommercePage(num: number) {
    this.router.navigate(['/tabs/tab4/commerce/' + num]);
  }
  changeFilters() {
      if (this.tabToShow === 'archive') {
          if (this.selectValue.length === 0) {
              this.dataService.getPresaleArchiveProject().subscribe((data) => {
                  this.presaleArchiveProjectData = data;
              });
          } else {
              this.presaleArchiveProjectData = this.presaleArchiveProjectData.filter(value =>
                  this.selectValue[0] === value.presaleStage || this.selectValue[1] === value.presaleStage);
          }
      }
      else {
          if (this.selectValue.length === 0) {
              this.dataService.getPresaleActiveProject().subscribe((data) => {
                  this.presaleActiveProjectData = data;
              });
          } else {
              this.presaleActiveProjectData = this.presaleActiveProjectData.filter(value =>
                  this.selectValue[0] === value.presaleStage || this.selectValue[1] === value.presaleStage);
          }
      }
  }
  chooseDate() {
      this.date = !this.date;
  }
  ngOnInit() {
    this.dataService.getCommerceActiveProject().subscribe((data) =>
    {
        this.commerceActiveProjectData = data;
    });
    this.dataService.getCommerceArchiveProject().subscribe((data) =>
    {
        this.commerceArchiveProjectData = data;
    });
    this.dataService.getPresaleActiveProject().subscribe((data) =>
    {
        this.presaleActiveProjectData = data;
    });
    this.dataService.getPresaleArchiveProject().subscribe((data) =>
    {
        this.presaleArchiveProjectData = data;
    });
    this.slotToShow = 'presale';
  }
}
