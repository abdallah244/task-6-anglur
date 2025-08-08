import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRole = route.data['expectedRole'];

  if (authService.isLoggedIn() && authService.getRole() === expectedRole) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
