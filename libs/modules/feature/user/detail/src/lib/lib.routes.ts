import { Route } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';

export const userDetailRoutes: Route[] = [
  { path: '', component: UserDetailComponent },
  { path: ':id', component: UserDetailComponent },
];
