import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@ecommerce/auth-data-access';

export const homeGuard = () => {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    if (authService.isAuthenticated()) {
      router.navigate(['/home']);
      return true;
    } else {
      router.navigate(['/auth']);
      return false;
    }
  };
};
