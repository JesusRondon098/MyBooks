import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormRegisteComponent } from './component/form-registe/form-registe.component';
import { RegisterComponent } from './pages/register/register.component';
<<<<<<< HEAD
import { ProfileComponent } from './pages/profile/profile.component';
=======
import { BooksComponent } from './pages/books/books.component';
>>>>>>> Dia3



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormRegisteComponent,
    RegisterComponent,
<<<<<<< HEAD
    ProfileComponent,
=======
    BooksComponent,
>>>>>>> Dia3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
