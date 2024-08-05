import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('@ecommerce/home').then((c) => c.homeRoutes),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('@ecommerce/product-detail').then((c) => c.productDetailRoutes),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@ecommerce/auth-form').then((c) => c.authFormRoutes),
  },
];
