import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

 
  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  loginForm = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
    ]),
  })

  loginAccount() {
    const credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }

    this.auth.login(credentials).subscribe(
      () => {
        this.router.navigateByUrl('/saved')
      },
      err => {
        console.error(err)
      }
    )

  }


}
