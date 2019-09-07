import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('refForm', {static: false}) signupForm: NgForm;
  defaultQuestion = 'pet';
  defaultMail = 'suraj.adhikari@lisnepal.com.np';
  gender = ['male','female','Extra'];
  user = {
    username: '',
    email: ' ',
    gender: ' ',
    answer: ' ',
    secret: ' ',
  };

  submitted = false;


  suggestName(){
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
        userData:{
          username: suggestedName,
          email:'sjfsjh@dfhjfh.com'
        },
        secret:'pet',
        answer: '',
        gender: 'male',
    });
  }

  OnSubmit(){
   this.submitted = true;
   this.user.username = this.signupForm.value.userData.username;
   this.user.email = this.signupForm.value.userData.email;
   this.user.gender = this.signupForm.value.gender;
   this.user.answer = this.signupForm.value.answer;
   this.user.secret = this.signupForm.value.secret;

 this.signupForm.reset();

  }
}
