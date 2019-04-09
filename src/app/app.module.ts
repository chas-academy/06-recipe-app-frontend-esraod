import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { StartpageComponent } from './startpage/startpage.component';
import { RecipeComponent } from './recipe/recipe.component';
// import { RecipeSuggComponent } from './recipe-sugg/recipe-sugg.component';
// import { Navbar2Component } from './navbar2/navbar2.component';
// import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchOptionsBarComponent } from './search-options-bar/search-options-bar.component';

//import stuff like navigation bar, frontpage, recipe page etc.
// + Add to declorations and imports

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartpageComponent,
    RecipeComponent,
    // RecipeSuggComponent,
    // Navbar2Component,
    // RecipeListComponent,
    RecipeDetailComponent,
    SearchResultsComponent,
    SearchOptionsBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
