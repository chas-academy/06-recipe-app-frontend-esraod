import { Component, OnInit } from '@angular/core';
import {faBook, faHeart, faUser, faHome, faList, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  home = faHome;
  book = faBook;
  user = faUser;
  list = faList;
  heart = faHeart;
  search = faSearch;
  hamb = faBars;

  constructor() { }

  ngOnInit() {
  }

}
