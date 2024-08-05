import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { EmailFormStateService } from '@ecommerce/auth-data-access';

export const authGuard = () => {
  return () => {
    const router = inject(Router);
    const email = inject(EmailFormStateService);
    return email.email() ? router.createUrlTree(['/']) : true;
  };
};
