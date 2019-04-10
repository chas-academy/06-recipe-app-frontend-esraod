import { Component, OnInit } from '@angular/core';
import {faBook, faHeart, faUser, faHome, faList, faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  
  home = faHome;
  book = faBook;
  user = faUser;
  list = faList;
  heart = faHeart;
  search = faSearch;

  constructor() { }

  ngOnInit() {
  }

}
