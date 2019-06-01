import { RecipieService } from './../recipie.service';
import { Recipie } from './../recipie.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.css']
})
export class RecipieDetailsComponent implements OnInit {
recipe: Recipie;
id: number;

  constructor(private _recipeService: RecipieService, private route: ActivatedRoute, private _router: Router) { }

  onAddShoppingList() {
this._recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  ngOnInit() {
    console.log('recipie details component init');
    this.route.params.subscribe(
      (
      (params: Params) => {this.id = +params['id'];
      this.recipe = this._recipeService.getRecipie(this.id);
    }));
// this.recipe.name=this._recipeService.recipies.nam;

  }

  onEditRecipe() {
this._router.navigate(['edit'], {relativeTo: this.route});
  }

}
