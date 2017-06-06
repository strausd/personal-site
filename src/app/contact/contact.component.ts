import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Http} from '@angular/http';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('messageSentConfirm', [
      state('void', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('void => active', animate('500ms ease-out')),
      transition('active => void', animate('500ms ease-in'))
    ])
  ]
})
export class ContactComponent implements OnInit {

  contact: FormGroup;
  email: string = '';
  confirmEmail: string = '';
  message: string = '';

  messageSent: boolean = false;
  messageState: string = 'void';

  constructor(private http: Http) { }

  ngOnInit() {
    this.contact = new FormGroup({
      email: new FormControl(this.email, [Validators.email, Validators.required]),
      confirmEmail: new FormControl(this.confirmEmail, [Validators.email, Validators.required, this.mismatchEmails.bind(this)]),
      message: new FormControl(this.message, [Validators.required, Validators.minLength(1), Validators.maxLength(500)])
    });
  }

  onSubmit() {
    this.email = this.contact.value.email;
    this.confirmEmail = this.contact.value.confirmEmail;
    this.message = this.contact.value.message;
    this.onPost();
    this.contact.reset();
    this.messageConfirm();
  }

  onPost() {
    this.http.post('/contact', {
      email: this.email,
      message: this.message
    }).subscribe(() => {});
  }

  messageConfirm() {
    this.messageSent = true;
    this.messageState = 'active'
    setTimeout(() => {
      this.messageSent = false;
      this.messageState = 'void';
    }, 3000);
  }

  mismatchEmails(control: FormControl): {[s: string]: boolean} {
    if (this.email !== control.value) {
      return {'mismatchEmails': true};
    }
    return null;
  }

}
