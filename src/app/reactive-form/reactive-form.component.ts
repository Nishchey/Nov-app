import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
genders = ['male', 'female'];
signupForm: FormGroup;

  constructor() { }

  onSubmit(){
    console.log(this.signupForm);
  }

 onAddHobby(){
const control = new FormControl(null,Validators.required);
(<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('controlName')).controls;
  }

  ngOnInit() {
    this.signupForm = new FormGroup(
      {
        'userName' : new FormControl('initialize  userName', Validators.required),
        'lastName' : new FormControl('initialize  lastName'),
        'PhoneNum' : new FormControl('+91 ', [Validators.required, Validators.minLength(14)]),
        'g' : new FormControl('male'),
        'hobbies': new FormArray([])

      }
    );
  }

}
