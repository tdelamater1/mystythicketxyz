import { Component,OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about1: any;
  about2: any;
  skills: any;
  
  constructor(private profileService:ProfileService) { }
  
    ngOnInit() {
      this.about1 =  this.profileService.about
      this.about2 =  this.profileService.about2
      this.skills =  this.profileService.skills()
    }
  
  }
