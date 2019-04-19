import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  
  recipes: any

  search = faSearch;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    // this.route.params.subscribe(routeParams =>{
    //   let val = this.route.snapshot.paramMap.get('value')
      
    //   console.log(val);

    //   this.recipeService.getRecipes(val).subscribe(data => {
    //     this.recipes = data
    //     console.log(this.recipes)
    //     this.recipes = this.recipes.matches
    //   })
    // })
  }

  sendToUrl(value) {

    console.log(value.form.value);

    let finalOptions = ""

    let searchterm = value.form.value.searchTerm

    let allergy = ""
    if (value.form.value.dairy == true){
      allergy += "&allowedAllergy[]=396^Dairy-Free"
    }
    if (value.form.value.gluten == true){
      allergy += "&allowedAllergy[]=393^Gluten-Free"
    }

    let diet = ""
    if (value.form.value.vegan == true){
      diet += "&allowedDiet[]=386^Vegan"
    }
    if (value.form.value.vegetarian == true){
      allergy += "&allowedDiet[]=387^Lacto-ovo+Vegetarian"
    }

    let course = ""
    if (value.form.value.appetizers == true){
      course += "&allowedCourse[]=course^course-Appetizers"
    }
    if (value.form.value.main == true){
      allergy += "&allowedCourse[]=course^course-Main-Dishes"
    }
    if (value.form.value.desserts == true){
      allergy += "&allowedCourse[]=course^course-Desserts"
    }

    finalOptions += searchterm
    finalOptions += allergy
    finalOptions += diet
    finalOptions += course

    this.recipeService.getRecipes(finalOptions).subscribe(data => {
      this.recipes = data
      console.log(this.recipes)
      this.recipes = this.recipes.matches
      // setTimeout(function(){window.scrollTo(0,document.body.scrollHeight);}, 500)
      window.scrollTo(300, 500);
    })

  }

  

}
