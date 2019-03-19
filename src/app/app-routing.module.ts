import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipieComponent } from './recipie/recipie.component';

const routes: Routes = [
  {path: 'ShoppingListComponent' , component: ShoppingListComponent},
  {path: 'RecipieComponent' , component: RecipieComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ShoppingListComponent, RecipieComponent];
