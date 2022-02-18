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
  apiKey: "AIzaSyCzYW7QAONM87s0-gv5IALDIjnlv5niWag",
  authDomain: "movie-inf0.firebaseapp.com",
  databaseURL: "https://movie-inf0-default-rtdb.firebaseio.com",
  projectId: "movie-inf0",
  storageBucket: "movie-inf0.appspot.com",
  messagingSenderId: "241323854100",
  appId: "1:241323854100:web:4413e7782491de1d9b9a01",
  measurementId: "G-9Q311N9ZGF"
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
