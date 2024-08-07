import { Route } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { homeGuard } from './home.guard';

export const homeAdminRoutes: Route[] = [
  { path: '', component: HomeAdminComponent, canActivate: [homeGuard] },
];
