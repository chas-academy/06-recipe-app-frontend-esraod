import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { faHeart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  user = faUser;
  heart = faHeart;
  search = faSearch;

  constructor(
    public auth: AuthenticationService,
  ) { }

  ngOnInit() {
  }

}
