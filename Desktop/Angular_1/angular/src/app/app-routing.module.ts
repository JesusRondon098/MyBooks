import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { CardComponent } from './component/card/card.component';

const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch:'full'},
  {path: "home", component: HomeComponent},
  {path: "register", component:RegisterComponent},
  {path: "profile", component:ProfileComponent},
  {path: "books", component:BooksComponent},
  {path: "card", component:CardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
