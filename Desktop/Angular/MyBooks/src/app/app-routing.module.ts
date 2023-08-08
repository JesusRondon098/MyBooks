import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormRegisteComponent } from './component/form-registe/form-registe.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
{path: "", redirectTo: "home" , pathMatch: 'full'},
{path: "profile", component:ProfileComponent},
{path:"home", component:HomeComponent},
{path:"registro", component:RegisterComponent},
{path: "header", component: HeaderComponent},
{path:"form", component: FormRegisteComponent},
{path: "footer", component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
