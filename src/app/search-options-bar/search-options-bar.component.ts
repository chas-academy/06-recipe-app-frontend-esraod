import { RecipeService } from './../services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-options-bar',
  templateUrl: './search-options-bar.component.html',
  styleUrls: ['./search-options-bar.component.css']
})
export class SearchOptionsBarComponent implements OnInit {

  search: any;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  sendToUrl(value){
    this.router.navigateByUrl(`/recipes/${value.form.value.searchValue}`)
  }

}
