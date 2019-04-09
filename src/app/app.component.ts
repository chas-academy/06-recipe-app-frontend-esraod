import { Component } from '@angular/core';
import { faCoffee, faUtensils, faBook, faHamburger, faCookie, faDrumstickBite, faHeart, faUser, faHome, faList, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // title = 'recipeAppFrontEnd-esraod';
   title = 'Yoi';
   faCoffee = faCoffee;
   faUtensils = faUtensils;
   faBook = faBook;
   faHam = faHamburger
   faCo = faCookie;
   faCok= faDrumstickBite;
   faheart = faHeart;
   fause = faUser;
   faHome = faHome;
   fali = faList;
  search = faSearch;

  
 
}
