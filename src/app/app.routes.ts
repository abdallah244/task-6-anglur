import { Routes } from '@angular/router';


import { LoginComponent } from './login/login';


import { AdminPanel } from './admin-panel/admin-panel';
import { UserHome } from './user-home/user-home';

import { authGuard } from './auth-guard';
import { roleGuard } from './role-guard';

export const routes: Routes = [
  
  {
    path: 'login',
  component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'admin-panel',
    component: AdminPanel,
    canActivate: [roleGuard],
    data: { expectedRole: 'admin' }
  },
  {
    path: 'user-home',
    component: UserHome,
    canActivate: [roleGuard],
    data: { expectedRole: 'user' }
  }
];
