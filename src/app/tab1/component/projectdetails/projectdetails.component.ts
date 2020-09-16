import { Component, OnInit } from '@angular/core';
import { GetInfoService } from 'src/app/services/get-info.service';
import { Project } from 'src/app/services/project.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss'],
})
export class ProjectdetailsComponent implements OnInit {

  project: Project;
  constructor(private getProject: GetInfoService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      this.getProject.searchProject().subscribe(data =>
        {
          this.project = data[+params.get('projectId')];    
        }, error => {
          console.log(error);
        })
    })
  }
}
