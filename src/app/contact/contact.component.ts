import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: FormGroup;
  email: string = '';
  confirmEmail: string = '';
  message: string = '';

  constructor() { }

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
    // this.contact.reset();
    console.log(this.contact);
  }

  mismatchEmails(control: FormControl): {[s: string]: boolean} {
    if (this.email !== control.value) {
      return {'mismatchEmails': true};
    }
    return null;
  }

}
