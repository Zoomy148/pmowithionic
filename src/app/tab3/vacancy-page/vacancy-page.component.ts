import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GetInfoService} from '../../services/get-info.service';

@Component({
  selector: 'app-vacancy-page',
  templateUrl: './vacancy-page.component.html',
  styleUrls: ['./vacancy-page.component.scss'],
})
export class VacancyPageComponent implements OnInit {
  vacancyData: any;
  constructor( private route: ActivatedRoute,
               private dataService: GetInfoService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.dataService.searchVacancy().subscribe(data => {

        this.vacancyData = data[+params.get('id')];
        console.log(this.vacancyData);
    });
    });
  }
}
