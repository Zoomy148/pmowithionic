import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-new-vacancy-page',
  templateUrl: './new-vacancy-page.component.html',
  styleUrls: ['./new-vacancy-page.component.scss'],
})
export class NewVacancyPageComponent implements OnInit {
  mobile: boolean = environment.mobile;
  desktop: boolean = environment.desktop;
  constructor() { }

  ngOnInit() {}

}
