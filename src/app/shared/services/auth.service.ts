import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = false;
  }

  isLoggedn(): boolean {
    return this.isLoggedIn;
  }

  setLogedIn(logedIn: boolean) {
    this.isLoggedIn = logedIn;
  }

  validConnexion(email: string, password: string): boolean {
    return (email === 'patate@maison.fr' && password === 'password')
  }

}
