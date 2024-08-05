import { Route } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { passwordGuard } from './guards/password.guard';
import { authGuard } from './guards/auth/auth.guard';

export const authFormRoutes: Route[] = [
  {
    path: '',
    component: AuthFormComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'email',
        loadComponent: () =>
          import('./auth-form/auth-form-email/auth-form-email.component').then(
            (c) => c.AuthFormEmailComponent,
          ),
      },
      {
        path: 'password',
        loadComponent: () =>
          import(
            './auth-form/auth-form-password/auth-form-password.component'
          ).then((c) => c.AuthFormPasswordComponent),
        canActivate: [passwordGuard],
      },
      { path: '', pathMatch: 'full', redirectTo: 'email' },
      { path: '**', redirectTo: 'email' },
    ],
  },
];
