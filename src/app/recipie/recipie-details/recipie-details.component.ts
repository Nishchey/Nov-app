import { RecipieService } from './../recipie.service';
import { Recipie } from './../recipie.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.css']
})
export class RecipieDetailsComponent implements OnInit {
  @Input() recipe: Recipie;

  constructor(private _recipeService: RecipieService) { }

  onAddShoppingList() {
this._recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  ngOnInit() {
    console.log('recipie details component init');
// this.recipe.name=this._recipeService.recipies.nam;

  }

}
