import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: any

  heart = faHeart;
 
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.detailRecipe()
  }

  detailRecipe() {
    let id = this.route.snapshot.paramMap.get('id')
    console.log(id)

    this.recipeService.getRecipe(id).subscribe(data => {
      this.recipe = data
      console.log(this.recipe)
    })

  }

}
