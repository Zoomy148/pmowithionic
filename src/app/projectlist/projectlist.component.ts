import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss'],
})
export class ProjectlistComponent implements OnInit {
  slotToShow: string = 'presale';
  constructor() { }

  segmentChanged(ev: any){
    console.log(ev.detail.value);
    this.slotToShow = ev.detail.value;
  }

  goToDetails(){
    
  }
  ngOnInit() {}

}
