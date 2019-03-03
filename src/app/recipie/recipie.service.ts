import { Injectable, EventEmitter } from '@angular/core';
import { Recipie } from './recipie.model';

@Injectable({
  providedIn: 'root'
})
export class RecipieService {

  recipieSelected = new EventEmitter<Recipie>();

   recipies: Recipie[] = [
    // tslint:disable-next-line:max-line-length
    new Recipie('test recipie',
    'test discription of recipie', 'https://pixnio.com/free-images/2017/09/21/2017-09-21-06-50-04-1100x825.jpg'),
    new Recipie('test 2 recipie', 'test 2 discription of recipie',
     'http://icons.iconarchive.com/icons/sonya/swarm/256/Fast-Food-icon.png')];

  constructor() { }

  getRecipies() {
console.log('Recipie service log triggred', this.recipies);
return this.recipies;
  }
}
