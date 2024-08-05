import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { EmailFormStateService } from '@ecommerce/auth-data-access';

export const passwordGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const emailFormState = inject(EmailFormStateService);

  if (!emailFormState.email()) {
    router.navigate(['auth', 'email']);
    return false;
  }
  return true;
};
