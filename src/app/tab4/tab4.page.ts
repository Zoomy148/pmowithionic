import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { GetInfoService} from '../services/get-info.service';
import { AnimationController , Animation} from '@ionic/angular';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page implements OnInit, AfterViewInit {
  @ViewChild('presale', {static: false}) presale: ElementRef;
  searchStr = '';
  isPlaying = false;
  projectData: any;
  slotToShow: string = 'presale';
  anim: Animation;
  constructor(private router: Router ,
              public  dataService: GetInfoService,
              public animationCtrl: AnimationController ,
              ) {}

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
  ngAfterViewInit() {
    this.anim = this.animationCtrl.create('myanim');
    this.anim
        .addElement(this.presale.nativeElement)
        .duration(1500)
        .easing('ease-out')
        .iterations(1)
        .fromTo('transform', 'translateX(0px)', 'translateX(500px)')
        .fromTo('opacity', 1, 0);
  }
  toggleAnimation(){
    if ( this.isPlaying){
      this.anim.pause()
    }
    else {
      this.anim.play()
    }
    this.isPlaying = !this.isPlaying;
    console.log(this.isPlaying)
  }


  ngOnInit() {
    this.dataService.searchProject().subscribe((data) =>
   {
     this.projectData = data;
   });
  }
}
