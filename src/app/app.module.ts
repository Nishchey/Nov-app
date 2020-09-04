import { PostsUserService } from './Services/posts-user.service';

import { ShoppingListService } from './recipie/recipie-list/shopping-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipieListComponent } from './recipie/recipie-list/recipie-list.component';
import { RecipieDetailsComponent } from './recipie/recipie-details/recipie-details.component';
import { RecipieItemComponent } from './recipie/recipie-list/recipie-item/recipie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropDownDirective } from './Shared/drop-down.directive';
import { FormValidatorsComponent } from './form-validators/form-validators.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipieEditComponent } from './recipie/recipie-edit/recipie-edit.component';
import { RecipieStartComponent } from './recipie/recipie-start/recipie-start.component';
import { RecipieComponent } from './recipie/recipie.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UsersComponent } from './users/users.component';
import { UserserviceService } from './Services/userservice.service';
import { PostsComponent } from './posts/posts.component';

import { HttpClientModule } from '@angular/common/http';
import { PostsFormComponent } from './posts-form/posts-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipieComponent,
    RecipieListComponent,
    RecipieDetailsComponent,
    RecipieItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirective,
    FormValidatorsComponent,
    routingComponent,
    RecipieEditComponent,
    RecipieStartComponent,
    ReactiveFormComponent,
    UsersComponent,
    PostsComponent,
    PostsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ShoppingListService, UserserviceService, PostsUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
