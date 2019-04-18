import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {

  constructor(
    private auth: AuthenticationService,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.getSaves();
  }

  details: any
  getSaves(){
    this.auth.showSaves().subscribe(
      saves => {
        this.details = saves
        this.detailRecipe()
      },
      err => {
        console.log(err.error)
      }
    )
  }

  recipes: any
  detailRecipe() {
    let arr = []
    for (let i = 0; i < this.details.saves.length; i++) { 
      this.recipeService.getRecipe(this.details.saves[i].recipeID).subscribe(data => {
        if (data.id == this.details.saves[i].recipeID) {
          arr[i] = data
        }
      })
    }
    this.recipes = arr
  }

  id:any
  unsaveRecipe(id) {
    this.auth.deleteSave(id).subscribe(
      response => {
        
      },
      err => {
        console.error(err.error)
      }
    )
  }



}
