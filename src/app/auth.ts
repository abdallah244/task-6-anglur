import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private userRole: 'admin' | 'user' = 'user';

  login(role: 'admin' | 'user') {
    this.loggedIn = true;
    this.userRole = role;
  }

  logout() {
    this.loggedIn = false;
    this.userRole = 'user';
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getRole(): 'admin' | 'user' {
    return this.userRole;
  }
}
