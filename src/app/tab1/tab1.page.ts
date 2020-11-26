import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../services/get-info.service';
import { environment} from '../../environments/environment';
import {UserModel} from '../models/user.model';
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
  test = [];
  searchStr: string = '';
  userTable = [];
  projects: [];
  user: any;
  mobile: boolean = environment.mobile ;
  desktop: boolean = environment.desktop ;
  constructor(private getUser: GetInfoService) {}
  ngOnInit() {
    this.getUser.search().subscribe((data) =>
    {
      this.userTable = data.filter(n => [1].includes(n.free));
      this.user = data.filter(n => [1].includes(n.free));
      for(let i = 0 ; i < this.user.length ; i++){
        for (let k = 0 ; k < this.user[i].activity.length ; k++){
          for ( let j = 0; j < this.user[i].activity[k].project.length; j++){
            this.barChartLabels[i].push(this.user[i].activity[k].project[j].projectname);
          }
        }
      }
    });
    this.getUser.searchProject().subscribe(projectData => {
      this.projects = projectData;
      this.hours = this.projects.map((el) => {
        return el['part'];
      });
      this.barChartData = [{data: [parseInt(this.hours[0]), parseInt(this.hours[1]), parseInt(this.hours[2])]}];
    });
  }
}
