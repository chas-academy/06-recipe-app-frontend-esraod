import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// add import for routing for navigaton bar,startpage recipe page etc.
// + inside of the square bracket of const routes.
// + inside NgModule

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
