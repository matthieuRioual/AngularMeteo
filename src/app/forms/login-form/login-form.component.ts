import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  loginError: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) {
    this.buildLoginForm()
    this.loginError = false;
  }

  ngOnInit(): void {
  }

  buildLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      //the first radio checked is the city name method
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password') }

  onSubmit(): void {
    if (this.email.value === 'lapatate@puremaison.fr' && this.password.value === 'password') {
      this.auth.isLoggedIn = true;
      this.router.navigate(['/home'])
    }
    else
      this.loginError = true;
  }

}
