import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipieComponent } from './recipie/recipie.component';
import { HeaderComponent } from './header/header.component';
import { RecipieDetailsComponent } from './recipie/recipie-details/recipie-details.component';
const routes: Routes = [
  { path: '', redirectTo: 'app-header',  pathMatch: 'full' },
  {path: 'app-recipie' , component: RecipieComponent,
  children: [   {path: 'recipieDetails', component : RecipieDetailsComponent} ]
},
  {path: 'ShoppingListComponent' , component: ShoppingListComponent},
  {path: 'RecipieComponent' , component: RecipieComponent},
  {path: 'RecipieComponent/RecipieDetails' , component: RecipieDetailsComponent},
  // {path: '**' , component: RecipieDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  ShoppingListComponent, RecipieComponent, HeaderComponent, RecipieDetailsComponent, RecipieDetailsComponent];
