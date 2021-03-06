import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { StartpageComponent } from './startpage/startpage.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchOptionsBarComponent } from './search-options-bar/search-options-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './user-assets/sign-up/sign-up.component';
import { SignInComponent } from './user-assets/sign-in/sign-in.component';
import { SavedComponent } from './user-assets/saved/saved.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartpageComponent,
    RecipeDetailComponent,
    SearchResultsComponent,
    SearchOptionsBarComponent,
    SignUpComponent,
    SignInComponent,
    SavedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
