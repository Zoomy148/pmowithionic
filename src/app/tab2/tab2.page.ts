import { Component } from '@angular/core';
import { GetInfoService } from '../services/get-info.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  public barChartLabels = [];
  public barChartType = 'doughnut';
  public barChartLegend = true;
  public barChartData = [
    {data: []}
  ];
  public barChartOptions:any = {
    legend: {position: 'left'}
  }
  hours = [];
  projects: [];
  users: [];
  constructor(private getInfoService: GetInfoService){ 
  }
 
  ngOnInit() {
    this.getInfoService.search().subscribe((userData) => 
    {
      this.users = userData;
    });
    this.getInfoService.searchProject().subscribe(projectData =>{
      this.projects = projectData;
      this.barChartLabels = this.projects.map((el) => {
        return el['name'];
      })
      this.hours = this.projects.map((el) => {
        return el['part'];
      })
      this.barChartData = [{data: [parseInt(this.hours[0]), parseInt(this.hours[1]), parseInt(this.hours[2])]}];
     })
    }
}
