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

    search(){
      this.userTable = this.http.get("http://localhost:3000/employees");   
      return this.userTable;
    }

    searchProject(){
      this.projectsList = this.httpProject.get("http://localhost:3000/projects");
      return this.projectsList;   
    }

    searchVacancy(){
      this.vacancyList = this.httpVacancy.get("http://localhost:3000/vacancies");
      return this.vacancyList;
    }
}