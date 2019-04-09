import { Component, OnInit } from '@angular/core';
import { faHamburger, faCookie, faDrumstickBite } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {

  // title = 'Yoi';
  hamburger = faHamburger
  cookie = faCookie;
  drumstick= faDrumstickBite;

  constructor() { }

  ngOnInit() {
  }

}

