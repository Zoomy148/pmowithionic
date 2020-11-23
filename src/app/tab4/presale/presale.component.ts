import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-presale',
  templateUrl: './presale.component.html',
  styleUrls: ['./presale.component.scss'],
})
export class PresaleComponent implements OnInit {
  mobile: boolean = environment.mobile;
  desktop: boolean = environment.desktop;
  constructor(private location: Location) { }
  goBack() {
    this.location.back();
  }
  ngOnInit() {}

}
