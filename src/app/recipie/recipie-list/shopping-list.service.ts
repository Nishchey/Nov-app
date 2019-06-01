import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { Subject } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  IngredientsChange = new Subject<Ingredient[]>();
  public ingredients: Ingredient[] =   [
    new Ingredient('Apples' , 5),
    new Ingredient('tomatoes', 10)
  ];

  getIngredients() {
    console.log('getIngredients() ->');
    return this.ingredients.slice();
  }
  addIngredient(argIngredient: Ingredient) {
this.ingredients.push(argIngredient);
this.IngredientsChange.next(this.ingredients.slice());
  }

  addIngredients(argIngredient: Ingredient[]) {
    // tslint:disable-next-line: comment-format
    // tslint:disable-next-line:max-line-length
    this.ingredients.push(...argIngredient); // 3 dots The spread operator return all elements of an array. Like you would write each element separately
    this.IngredientsChange.next(this.ingredients.slice());
      }

  constructor() { }
}

// let myArr = [1, 2, 3];
// return [1, 2, 3];
// //is the same as:
// return [...myArr];
