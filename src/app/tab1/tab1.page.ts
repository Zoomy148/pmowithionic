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
  userTable: any;
  mobile: boolean = environment.mobile ;
  constructor(private getUser: GetInfoService) {}
  ngOnInit(){
    this.getUser.search().subscribe((data) =>
    {
      this.userTable = data.filter(n => [1].includes(n.free));
    });
  }
  goToUser(id: number){}
}
