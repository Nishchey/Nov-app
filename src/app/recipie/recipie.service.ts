import { Injectable, EventEmitter } from '@angular/core';
import { Recipie } from './recipie.model';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from './recipie-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipieService {

  recipieSelected = new EventEmitter<Recipie>();

   recipies: Recipie[] = [
    // tslint:disable-next-line:max-line-length
    new Recipie('test recipie',
    'test description of recipie', 'https://pixnio.com/free-images/2017/09/21/2017-09-21-06-50-04-1100x825.jpg',
    [
      new Ingredient('Lemon', 2),
      new Ingredient('Mint', 5)
    ]),
    new Recipie('test 2 recipie', 'test 2 description of recipie',
     'http://icons.iconarchive.com/icons/sonya/swarm/256/Fast-Food-icon.png',[
       new Ingredient('bun', 2),
       new Ingredient('potato patty', 1)
     ])];

  constructor(private _slService: ShoppingListService) { }

  getRecipies() {
console.log('Recipie service log triggred', this.recipies);
return this.recipies;
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
//this._slService.addIngredients(ingredients);
  }
}
