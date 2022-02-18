import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatInputModule}from '@angular/material/input';
import { MovieComponent } from './components/movie/movie.component';
import { AboutComponent } from './components/about/about.component';
import { AdvancedSearchComponent } from './componets/advanced-search/advanced-search.component';
import { WelcomeComponent } from './components/welcome/welcome.component'
import {AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFireModule } from '@angular/fire';
import { SignInComponent } from './components/sign-in/sign-in.component';
const firebaseConfig = {
  apiKey: "Type Your API KEY",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    AboutComponent,
    AdvancedSearchComponent,
    WelcomeComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatInputModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
