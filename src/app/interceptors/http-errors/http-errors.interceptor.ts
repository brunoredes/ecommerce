import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
export const httpErrorsInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(MatSnackBar);

  const clonedRequest = req.clone({
    setHeaders: {
      'x-access-token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    },
  });

  return next(clonedRequest).pipe(
    catchError((error) => {
      toast.open('Houve um erro', 'Fechar', {
        duration: 3000,
        politeness: 'assertive',
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      return throwError(() => error);
    }),
  );
};
