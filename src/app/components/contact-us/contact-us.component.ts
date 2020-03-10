import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  constructor() {

  }

  ngOnInit(): void {
    this.createContactForm();
  }



  createContactForm() {
    this.contactForm = new FormGroup({
      name: new FormControl(),
      subject: new FormControl(),
      email: new FormControl(),
      message: new FormControl()
    });
  }

  sendMessage() {
    const formParam = {
      name: this.contactForm.controls.name.value,
      subject: this.contactForm.controls.name.value,
      email: this.contactForm.controls.name.value,
      message: this.contactForm.controls.message.value
    };
    console.log(formParam);
    this.contactForm.reset();

  }


}
