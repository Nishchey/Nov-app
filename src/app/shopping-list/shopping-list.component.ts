import { ShoppingListService } from './../recipie/recipie-list/shopping-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
 ingredients: Ingredient[] ;
 mysubscription : Subscription;
// =   [  new Ingredient('Apples' , 5),
//   new Ingredient('tomatoes', 10  )
// ];
  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this._shoppingListService.getIngredients();
    this.mysubscription = this._shoppingListService.IngredientsChange.subscribe(
(ingred: Ingredient[]) => {
  this.ingredients = ingred;
}
    );
    }
ngOnDestroy() {
  this.mysubscription.unsubscribe();
}
}
