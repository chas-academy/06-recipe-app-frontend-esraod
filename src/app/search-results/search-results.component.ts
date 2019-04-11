import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  
  recipes: any

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams =>{
      let val = this.route.snapshot.paramMap.get('value')
      console.log(val);
      this.recipeService.getRecipes(val).subscribe(data => {
        this.recipes = data
        console.log(this.recipes)
        this.recipes = this.recipes.matches
      })
    })
  }

}
