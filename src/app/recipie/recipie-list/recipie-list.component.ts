import { Routes, ActivatedRoute, Router } from '@angular/router';
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

  constructor(private _recipieService: RecipieService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
     this.recipies = this._recipieService.getRecipies();
    console.log(this.recipies);
  }
  OnNewRecipe() {
this._router.navigate(['new'] , {relativeTo: this._route});
  }
 /* onRecipieSelected(recipie: Recipie) {
this.recipieWasSelected.emit(recipie);
  }*/

}
