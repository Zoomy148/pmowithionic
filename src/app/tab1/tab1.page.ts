import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../services/get-info.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  userTable = [];
  constructor(private getUser : GetInfoService) {}

  ngOnInit(){
    this.getUser.search().subscribe((data) => 
    {
      this.userTable = data;
    });
  }

  goToUser(id: number){
    
  }
}
