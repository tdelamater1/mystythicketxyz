import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { MessagingService } from '../messaging.service';
import { EmailMessage } from '../../EmailMessage'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  model: any = {};
  infoMessage:String = ''

  constructor(private messagingService: MessagingService){}

  ngOnInit(){
    console.log("onInit!");
  }

  submit(f: NgForm): void {

    const payload:EmailMessage = {
      name: this.model.name,
      subject: this.model.subject,
      email: this.model.email,
      message: this.model.message
    }

    this.messagingService.postMessage(payload)
      .subscribe((response) => {this.infoMessage = response.response});
      
    f.resetForm();
  }

}