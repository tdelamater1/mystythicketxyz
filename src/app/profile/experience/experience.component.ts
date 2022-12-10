import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { MessagingService } from '../messaging.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

workexp: any

  constructor(private profileService:ProfileService, private messagingService:MessagingService) { }

    ngOnInit() {

      this.workexp =  this.profileService.exprience()
    }
}