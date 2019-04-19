import { AuthenticationService } from './../services/authentication.service';
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
    private auth: AuthenticationService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.detailRecipe();
    this.alreadySaved();
  }

  id = this.route.snapshot.paramMap.get('id')

  detailRecipe() {
    console.log(this.id)

    this.recipeService.getRecipe(this.id).subscribe(data => {
      this.recipe = data
      console.log(this.recipe)
      setTimeout(function(){window.scrollTo(0,document.body.scrollHeight);}, 500)
    })

  }

  lastAction: any //disable button spam
  saveRecipe() {
    if (this.lastAction == "save") {
      return
    }
    this.lastAction = "save"
    this.auth.storeSave(this.id).subscribe(
      response => {
        this.alreadySaved()
      },
      err => {
        console.error(err.error)
      }
    )
  }

  unsaveRecipe() {
    if (this.lastAction == "unsave") {
      return
    }
    this.lastAction = "unsave"
    this.auth.deleteSave(this.id).subscribe(
      response => {
        this.alreadySaved()
      },
      err => {
        console.error(err.error)
      }
    )
  }

  already: boolean
  alreadySaved() {
    this.auth.checkSave(this.id).subscribe(
      response => {
        if (response.saved == true) {
          this.already = true
        } else {
          this.already = false
        }
      },
      err => {
        console.error(err.error)
      }
    )
  }

}
