import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '@ecommerce/admin-data-access';
import { catchError, delay, map } from 'rxjs';

export const httpRequestInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.setLoading(true, req.url);
  return next(req).pipe(
    delay(1000),
    catchError((err) => {
      loadingService.setLoading(false, req.url);
      throw err;
    }),
    map((evt) => {
      if (evt instanceof HttpResponse) {
        loadingService.setLoading(false, req.url);
      }
      return evt;
    }),
  );
};
