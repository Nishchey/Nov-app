import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-validators',
  templateUrl: './form-validators.component.html',
  styleUrls: ['./form-validators.component.css']
})
export class FormValidatorsComponent implements OnInit {
  defaultName = 'userForm';
  SuggestName = 'Suggested Name';
  genders = [ 'Male', 'Female'];
  @ViewChild('userForm') signUpForm: NgForm;
  constructor() { }

  suggestUserName(){
    this.signUpForm.form.patchValue({
      userData:{
        IDK : this.SuggestName
      }
    });
    console.log('suggestUserName() fired , firstName -> ',this.signUpForm.form);
  }
  ngOnInit() {
  }

  onSubmit(){
    console.log(this.signUpForm);
  }
}
