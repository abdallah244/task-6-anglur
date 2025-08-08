import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth'; 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loginAs(role: 'admin' | 'user') {
  this.authService.login(role);

  if (role === 'admin') {
    this.router.navigate(['/admin-panel']);
  } else {
    this.router.navigate(['/user-home']);
  }
}

}
