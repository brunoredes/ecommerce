import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => import('@ecommerce/home').then((c) => c.homeRoutes),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('@ecommerce/auth-form').then((c) => c.authFormRoutes),
    },
];
