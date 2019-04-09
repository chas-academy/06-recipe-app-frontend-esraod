import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-options-bar',
  templateUrl: './search-options-bar.component.html',
  styleUrls: ['./search-options-bar.component.css']
})
export class SearchOptionsBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchRecipes(value) {
    console.log(value.form.value.searchValue);
  }

}
