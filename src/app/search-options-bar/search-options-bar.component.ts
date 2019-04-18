import { RecipeService } from './../services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHeart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-options-bar',
  templateUrl: './search-options-bar.component.html',
  styleUrls: ['./search-options-bar.component.css']
})
export class SearchOptionsBarComponent implements OnInit {

  // search: any;
  
  user = faUser;
  heart = faHeart;
  search = faSearch;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
  ) { }
  
  

  ngOnInit() {
  }

  sendToUrl(value){
    console.log(value.form.value)
    
    this.router.navigateByUrl(`/recipes/${value.form.value.searchTerm}`)
  }
  

}
