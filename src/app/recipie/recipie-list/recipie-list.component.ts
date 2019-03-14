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

/*
recipies: Recipie[] = [
  new Recipie('test recipie', 'test description of recipie', 'https://pixnio.com/free-images/2017/09/21/2017-09-21-06-50-04-1100x825.jpg'),
  new Recipie('test 2 recipie', 'test 2 description of recipie',
   'http://icons.iconarchive.com/icons/sonya/swarm/256/Fast-Food-icon.png')];
   */
