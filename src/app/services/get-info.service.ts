import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

    constructor(private http: HttpClient,
                private httpProject: HttpClient,
                private httpVacancy: HttpClient,
                private httpActivityData: HttpClient,
                private httpCommerceActiveProject: HttpClient,
                private httpCommerceArchiveProject: HttpClient,
                private httpPresaleActiveProject: HttpClient,
                private httpPresaleArchiveProject: HttpClient) {
    }
    projectsList: any;
    userTable: any;
    vacancyList: any;
    ActivityData: any;
    commerceProjectActive: any;
    commerceProjectArchive: any;
    presaleProjectActive: any;
    presaleProjectArchive: any;

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
    searchActivityData() {
        this.ActivityData = this.httpActivityData.get('assets/data/activity-data.json');
        return this.ActivityData;
    }
    getCommerceActiveProject() {
        this.commerceProjectActive = this.httpCommerceActiveProject.get('assets/data/active-commerce-project-data.json');
        return this.commerceProjectActive;
    }
    getCommerceArchiveProject() {
        this.commerceProjectArchive = this.httpCommerceArchiveProject.get('assets/data/archive-commerce-project-data.json');
        return this.commerceProjectArchive;
    }
    getPresaleActiveProject() {
        this.presaleProjectActive = this.httpPresaleActiveProject.get('assets/data/active-presale-project-data.json');
        return this.presaleProjectActive;
    }
    getPresaleArchiveProject() {
        this.presaleProjectArchive = this.httpPresaleArchiveProject.get('assets/data/archive-presale-project-data.json');
        return this.presaleProjectArchive;
    }
}
