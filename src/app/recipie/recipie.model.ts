import { Ingredient } from './../Shared/ingredient.model';
export class Recipie {
public name: string;
public discription: string;
public imagePath: string;
public ingredients: Ingredient[];

constructor(name: string, disc: string, imagePath: string,ingredients: Ingredient[]) {
this.name =  name;
this.discription = disc;
this.imagePath = imagePath;
this.ingredients = ingredients;
   }
}
