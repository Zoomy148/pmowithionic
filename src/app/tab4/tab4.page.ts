import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  slotToShow: string = 'presale';
  constructor(private router: Router) { }

  segmentChanged(ev: any){
    console.log(ev.detail.value);
    this.slotToShow = ev.detail.value;
  }

  goToDetails(num: number){
    this.router.navigate(['/tabs/tab4/presale/' + num]);
  }
  ngOnInit() {}
}
