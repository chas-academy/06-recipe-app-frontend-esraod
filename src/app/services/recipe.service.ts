import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private http: HttpClient,
  ) {}

  getRecipes(searchOptions): Observable<any> {
    return this.http.get<any>(`http://api.yummly.com/v1/api/recipes?_app_id=ead48cad&_app_key=fcd2ab0d275f617f4376644b2b333411&q=${searchOptions}`)
  }

  getRecipe(id): Observable<any> {
    return this.http.get<any>(`http://api.yummly.com/v1/api/recipe/${id}?_app_id=ead48cad&_app_key=fcd2ab0d275f617f4376644b2b333411`)
  }
}
