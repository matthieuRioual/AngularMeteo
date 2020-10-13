import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn: boolean = false;

  constructor() {
    this.isLoggedIn = false;
  }

  isLoggedn(): boolean {
    return false;
  }
}
