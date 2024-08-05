import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { EmailFormStateService } from '@ecommerce/auth-data-access';

export const passwordGuard = () => {
  return () => {
    const router = inject(Router);
    const emailFormState = inject(EmailFormStateService);

    if (!emailFormState.email()) {
      router.navigate(['auth', 'email']);
      return false;
    }
    return true;
  };
};
