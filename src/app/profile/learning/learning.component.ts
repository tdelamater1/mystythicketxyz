import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  learningtopics: any;
  learningskills: any;
  
  constructor(private profileService:ProfileService) { }
  
    ngOnInit() {
      this.learningtopics =  this.profileService.learningtopics
      this.learningskills =  this.profileService.learning()
    }
  
}
