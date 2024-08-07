import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('@ecommerce/home-admin').then((c) => c.homeAdminRoutes),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('@ecommerce/user-detail').then((c) => c.userDetailRoutes),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@ecommerce/auth-form').then((c) => c.authFormRoutes),
  },
];
