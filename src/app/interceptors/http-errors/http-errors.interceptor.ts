import { HttpInterceptorFn } from '@angular/common/http';

export const httpErrorsInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
