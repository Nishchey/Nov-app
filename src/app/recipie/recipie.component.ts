import { RecipieService } from './recipie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipie',
  templateUrl: './recipie.component.html',
  styleUrls: ['./recipie.component.css'],
  providers: [RecipieService]
})
export class RecipieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
