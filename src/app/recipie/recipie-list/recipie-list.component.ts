import { RecipieService } from './../recipie.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipie } from '../recipie.model';
// import 'rxjs/add/observable/throw'; // for handling error


@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
// @Output() recipieWasSelected = new EventEmitter<Recipie>();
  recipies: Recipie[];

  constructor(private _recipieService: RecipieService) { }

  ngOnInit() {
     this.recipies = this._recipieService.getRecipies();
    console.log(this.recipies);
  }
 /* onRecipieSelected(recipie: Recipie) {
this.recipieWasSelected.emit(recipie);
  }*/

}
