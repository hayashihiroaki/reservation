import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    errors: any = []

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {}

    signup(signupForm) {
        this.authService.signup(signupForm.value).subscribe(
          (result) => {
            console.log("Success!")
            this.router.navigate(['/login'])
          },
          (err: HttpErrorResponse) => {
            console.error(err)
            this.errors = err.error.errors
          }
        )
    }
}