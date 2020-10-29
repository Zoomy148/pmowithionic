import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GetInfoService} from '../../services/get-info.service';

@Component({
  selector: 'app-vacancy-page',
  templateUrl: './vacancy-page.component.html',
  styleUrls: ['./vacancy-page.component.scss'],
})
export class VacancyPageComponent implements OnInit {
  vacancyData = [];
  number: string;
  constructor( private route: ActivatedRoute,
               private dataService: GetInfoService) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => this.number = params.get('id'));
    this.dataService.searchVacancy().subscribe(data => {
      this.vacancyData = data.filter( vacancy => this.number === vacancy.id );
      console.log(this.vacancyData);
      console.log(this.number);
    });
  }
}
