import { AuthGuardService } from './services/auth-guard.service';
import { SavedComponent } from './user-assets/saved/saved.component';
import { SignUpComponent } from './user-assets/sign-up/sign-up.component';
import { SignInComponent } from './user-assets/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { SearchResultsComponent } from './search-results/search-results.component';


// add import for routing for navigaton bar,startpage recipe page etc.
// + inside of the square bracket of const routes.
// + inside NgModule

const routes: Routes = [
  {
    path: 'recipe/:id',
    component: RecipeDetailComponent,
  },
  
  {
    path: 'recipes',
    component: SearchResultsComponent,
  },

  {
    path: 'login',
    component: SignInComponent,
  },

  {
    path: 'register',
    component: SignUpComponent,
  },

  {
    path: 'saved',
    component: SavedComponent,

  },

  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
