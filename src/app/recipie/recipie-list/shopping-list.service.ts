import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredient: Ingredient[] =   [
    new Ingredient('Apples' , 5),
    new Ingredient('tomatoes', 10)
  ];

  getIngredients() {
    console.log('getIngredients() ->');
    return this.ingredient;
  }
  constructor() { }
}
