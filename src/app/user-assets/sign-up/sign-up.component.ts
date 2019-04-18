import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private auth: AuthenticationService,
    private router: Router 
  ) { }

  ngOnInit() {
  }

  registerForm = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
    ]),
  })

  createAccount() {
    const credentials = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    }

    this.auth.register(credentials).subscribe(
      () => {
        this.auth.login(credentials).subscribe(
          () => {
            this.router.navigateByUrl('/saved')
          },
          err => {
            console.error(err)
          }
        )
      },
      err => {
        console.error(err)
      }
    )
  }



}
