import { WelcomeComponent } from './components/welcome/welcome.component';
import { AdvancedSearchComponent } from './componets/advanced-search/advanced-search.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"welcome",pathMatch:"full"},
  {path:"advanced",component:AdvancedSearchComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"signin",component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
