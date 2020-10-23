import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-presale',
  templateUrl: './presale.component.html',
  styleUrls: ['./presale.component.scss'],
})
export class PresaleComponent implements OnInit {

  constructor(private location: Location) { }
  goBack(){
    this.location.back();
  }
  ngOnInit() {}

}
