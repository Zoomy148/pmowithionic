import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../services/get-info.service';
import { environment} from '../../environments/environment';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public barChartLabels = [[],[],[],[]];
  public barChartType = 'doughnut';
  public barChartLegend = true;
  public barChartData = [
    {data: []}
  ];
  public barChartOptions: any = {
    legend: {position: 'left'}
  };
  hours = [];
  searchStr = '';
  userTable = [];
  projects: [];
  user: any;
  mobile: boolean = environment.mobile ;
  constructor(private getUser: GetInfoService) {}
  ngOnInit(){
    this.getUser.search().subscribe((data) =>
    {
      this.userTable = data.filter(n => [1].includes(n.free));
      this.user = data.filter(n => [1].includes(n.free));
      for (let i = 0 ; i < this.user.activity[0].project.length ; i++) {
        this.barChartLabels[0].push( this.user.activity[0].project[i].projectname) ;}
      for (let i = 0 ; i < this.user.activity[1].project.length ; i++) {
        this.barChartLabels[1].push( this.user.activity[1].project[i].projectname) ;}
      for (let i = 0 ; i < this.user.activity[0].project.length ; i++) {
        this.barChartLabels[0].push( this.user.activity[0].project[i].projectname) ;}
    });
    this.getUser.searchProject().subscribe(projectData =>{
      this.projects = projectData;
      this.hours = this.projects.map((el) => {
        return el['part'];
      });
      this.barChartData = [{data: [parseInt(this.hours[0]), parseInt(this.hours[1]), parseInt(this.hours[2])]}];
    });
  }
  goToUser(id: number){}
}
