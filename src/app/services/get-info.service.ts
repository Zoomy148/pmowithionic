import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

    constructor(private http: HttpClient,
                private httpProject: HttpClient,
                private httpVacancy: HttpClient) {
    }
    projectsList: any;
    userTable: any;
    vacancyList: any;
    stageList: any;

    search(){
      this.userTable = this.http.get('assets/data/employee-data.json');
      console.log(this.http.get('assets/data/employee-data.json'));
      return this.userTable;

    }

    searchProject(){
      this.projectsList = this.httpProject.get('assets/data/project-data.json');
      return this.projectsList;   
    }

    searchVacancy(){
      this.vacancyList = this.httpVacancy.get('assets/data/vacansy-data.json');
      return this.vacancyList;
    }
    searchStage(){
        this.stageList = this.httpVacancy.get('assets/data/status-stage-data.json');
        return this.vacancyList;
    }
}
