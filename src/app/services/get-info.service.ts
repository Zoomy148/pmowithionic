import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

    constructor(private http: HttpClient,
                private httpProject: HttpClient,
                private httpVacancy: HttpClient,
                private httpStage: HttpClient,
                private httpPresaleProject: HttpClient,
                private httpActivityData: HttpClient) {
    }
    projectsList: any;
    userTable: any;
    vacancyList: any;
    stageList: any;
    PresaleProjectList: any;
    ActivityData: any;

    search() {
      this.userTable = this.http.get('assets/data/employee-data.json');
      console.log(this.http.get('assets/data/employee-data.json'));
      return this.userTable;
    }

    searchProject() {
      this.projectsList = this.httpProject.get('assets/data/project-data.json');
      return this.projectsList;
    }

    searchVacancy() {
      this.vacancyList = this.httpVacancy.get('assets/data/vacansy-data.json');
      return this.vacancyList;
    }
    searchStage() {
        this.stageList = this.httpStage.get('assets/data/status-stage-data.json');
        return this.stageList;
    }
    searchPresaleProject() {
        this.projectsList = this.httpPresaleProject.get('assets/data/presale-project-data.json');
        return this.projectsList;
    }
    searchActivityData() {
        this.ActivityData = this.httpActivityData.get('assets/data/activity-data.json');
        return this.ActivityData;
    }
}
