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
niceNames =['Nish' , 'reading' ];
  constructor() { }

  onSubmit(){
    console.log(this.signupForm);
  }

 onAddHobby(){
const control = new FormControl(null,[Validators.required,this.niceNamesValidator.bind(this)]);
(<FormArray>this.signupForm.get('hobbies')).push(control);
  }


niceNamesValidator(control: FormControl):{[s: string] :boolean}
{
  if(this.niceNames.indexOf(control.value) !== -1){
    return{'nice_name_m8': true}
  }
 return null;
}

  ngOnInit() {
    this.signupForm = new FormGroup(
      {
        'userName' : new FormControl('initialize  userName',[ Validators.required, this.niceNamesValidator.bind(this)]),
        'lastName' : new FormControl('initialize  lastName'),
        'PhoneNum' : new FormControl('+91 ', [Validators.required, Validators.minLength(14)]),
        'g' : new FormControl('male'),
        'hobbies': new FormArray([])

      }
    );
  }

}
