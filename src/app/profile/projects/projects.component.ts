import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects: any =[];
  aboutprojects: any;

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.projects = this.profileService.getProjects()
    console.log(this.projects)
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length
    };
    this.aboutprojects =  this.profileService.aboutprojects
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }
}