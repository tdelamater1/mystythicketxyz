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

  constructor(private messagingService: MessagingService){}

  ngOnInit(){
    console.log("onInit!");
  }

  submit(f: NgForm): void {
    console.log('posting test message');
    this.messagingService.testMessage().subscribe((response) => {console.log(response)});;
    console.log('test message made');

    const payload:EmailMessage = {
      email: this.model.email,
      name: this.model.name,
      message: this.model.message
    }

    this.messagingService.postMessage(payload).subscribe((response) => {console.log(response)});
    f.resetForm();
  }

}