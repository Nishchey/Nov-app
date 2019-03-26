import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipieComponent } from './recipie/recipie.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  { path: '', redirectTo: '/app-header',  pathMatch: 'full' },
  {path: 'app-recipie' , component: RecipieComponent},
  {path: 'ShoppingListComponent' , component: ShoppingListComponent},
  {path: 'RecipieComponent' , component: RecipieComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  ShoppingListComponent, RecipieComponent,HeaderComponent];
