import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validators',
  templateUrl: './form-validators.component.html',
  styleUrls: ['./form-validators.component.css']
})
export class FormValidatorsComponent implements OnInit {
  defaultName = 'Welcome User';
  constructor() { }

  ngOnInit() {
  }

}
