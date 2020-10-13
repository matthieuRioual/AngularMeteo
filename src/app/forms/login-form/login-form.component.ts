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

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) {
    this.buildLoginForm()
  }

  ngOnInit(): void {
  }

  buildLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      //the first radio checked is the city name method
      pseudo: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  get pseudo() { return this.loginForm.get('pseudo'); }
  get password() { return this.loginForm.get('password') }

  onSubmit(): void {
    if (this.pseudo.value === 'lapatate' && this.password.value === 'password') {
      this.auth.isLoggedIn = true;
      this.router.navigate(['/home'])
    }
  }

}
