import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  heart = faHeart;
  search = faSearch;

  constructor(
    public auth: AuthenticationService,
  ) { }

  ngOnInit() {
  }

}
