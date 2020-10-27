import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { GetInfoService} from '../services/get-info.service';
import { AnimationController , Animation} from '@ionic/angular';
import { environment} from '../../environments/environment';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page implements OnInit, AfterViewInit {
  @ViewChild('presale', {static: false}) presale: ElementRef;
  searchStr = '';
  mobile: boolean = environment.mobile;
  desktop: boolean = environment.desktop;
  isPlaying = false;
  projectData: any;
  presaleProjectData: any;
  stageData: any;
  slotToShow: string = 'presale';
  tabToShow: string = 'archive';
  tabToShowCommerce: string = 'arciveCommerce';
  anim: Animation;
  selector = [];
  selectValue = '';
  constructor(private router: Router ,
              public  dataService: GetInfoService,
              public animationCtrl: AnimationController ,
              ) {}

  segmentChanged(ev: any){
    console.log(ev.detail.value);
    this.slotToShow = ev.detail.value;
  }
    tabChanged(ev: any){
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
  getValue() {
      this.selector.push( document.getElementById('selector'));
      this.selectValue = ( this.selector[1].value );


  }
  stageFilterPresaleArchiveData(){
      this.presaleProjectData = this.presaleProjectData.filter(
          stage => this.selectValue[1] === stage.stage );
      console.log(this.selectValue[1]);

  }
  ngAfterViewInit() {
    // this.anim = this.animationCtrl.create('myanim');
    // this.anim
    //     .addElement(this.presale.nativeElement)
    //     .duration(1500)
    //     .easing('ease-out')
    //     .iterations(1)
    //     .fromTo('transform', 'translateX(0px)', 'translateX(500px)')
    //     .fromTo('opacity', 1, 0);
  }
  // toggleAnimation(){
  //   if ( this.isPlaying){
  //     this.anim.pause()
  //   }
  //   else {
  //     this.anim.play()
  //   }
  //   this.isPlaying = !this.isPlaying;
  //   console.log(this.isPlaying)
  // }
  ngOnInit() {
    this.dataService.searchProject().subscribe((data) =>
   {
     this.projectData = data;
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
