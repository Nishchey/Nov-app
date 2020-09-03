import { PostsUserService } from './Services/posts-user.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormValidatorsComponent } from './form-validators/form-validators.component';
import { RecipieStartComponent } from './recipie/recipie-start/recipie-start.component';
import { RecipieEditComponent } from './recipie/recipie-edit/recipie-edit.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipieComponent } from './recipie/recipie.component';
import { HeaderComponent } from './header/header.component';
import { RecipieDetailsComponent } from './recipie/recipie-details/recipie-details.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
// path is case sensitive
const routes: Routes = [
  { path: '', redirectTo: 'app-header',  pathMatch: 'full' },
  {path: 'Recipie' , component: RecipieComponent,
  children: [
      {path: '', component : RecipieStartComponent},
      {path: 'new', component : RecipieEditComponent},
      {path: ':id', component : RecipieDetailsComponent},
      {path: ':id/edit', component : RecipieEditComponent},
   ]
},
  {path: 'ShoppingListComponent' , component: ShoppingListComponent},
  // {path: 'RecipieComponent' , component: RecipieComponent},
  {path: 'Recipie/RecipieDetails' , component: RecipieDetailsComponent},
  {path: 'FormsComponent' , component: FormValidatorsComponent},
  {path: 'ReactiveFormComponent' , component: ReactiveFormComponent},
  {path: 'UsersComponent' , component: UsersComponent},
  {path: 'PostsComponent' , component: PostsComponent},
  // {path: '**' , component: RecipieStartComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  ShoppingListComponent, RecipieComponent, HeaderComponent, RecipieDetailsComponent, RecipieDetailsComponent];
