import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GetInfoService} from '../../services/get-info.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-vacancy-page',
  templateUrl: './vacancy-page.component.html',
  styleUrls: ['./vacancy-page.component.scss'],
})
export class VacancyPageComponent implements OnInit {
  vacancyData = [];
  number: number;
  public subscription: Subscription;
  constructor( private route: ActivatedRoute,
               private dataService: GetInfoService) {
    this.subscription = route.params.subscribe(params => this.number = params['id']);
  }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.dataService.searchVacancy().subscribe(data => {
    //     this.vacancyData = data[+params.get('id')];
    //     console.log(data);
    //   });
    // })
      this.dataService.searchVacancy().subscribe(data => {
        this.vacancyData = data.filter(n => [this.number].includes(n.id));
        console.log(this.vacancyData);
        console.log(this.number);
    });
  }
}
