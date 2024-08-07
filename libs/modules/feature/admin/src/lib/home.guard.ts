import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@ecommerce/auth-data-access';

export function homeGuard() {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    if (!authService.isAuthenticated()) {
      router.navigate(['/auth']);
      return false;
    }
    router.navigate(['/home']);
    return true;
  };
}

// export const homeGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthService);
//   const router = inject(Router);
//   if (!authService.isAuthenticated()) {
//     router.navigate(['/auth']);
//     return false;
//   }
//   router.navigate(['/home']);
//   return true;
// };
