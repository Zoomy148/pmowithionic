import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetInfoService} from '../services/get-info.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  projectData: any;
  slotToShow: string = 'presale';
  constructor(private router: Router ,
              public  dataService: GetInfoService) { }

  segmentChanged(ev: any){
    console.log(ev.detail.value);
    this.slotToShow = ev.detail.value;
  }

  goToDetails(num: number){
    this.router.navigate(['/tabs/tab4/presale/' + num]);
  }

  goToCommercePage(num: number){
    this.router.navigate(['/tabs/tab4/commerce/' + num]);
  }

  ngOnInit() {
   this.dataService.searchProject().subscribe((data) =>
   {
     this.projectData = data;
   });
  }
}
