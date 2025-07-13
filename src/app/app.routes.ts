import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';

export const routes: Routes = [
    { path: '', component: Landing },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    // You might want a wildcard route to redirect to the landing page for unknown paths
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];
