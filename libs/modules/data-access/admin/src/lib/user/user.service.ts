import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly url = 'https://65009f9718c34dee0cd53786.mockapi.io/users';
  private readonly http: HttpClient = inject(HttpClient);

  getUsers(page = 1, limit = 1): Observable<ApiResponse<User>> {
    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('limit', limit);

    return this.http.get<User[]>(this.url, { params }).pipe(
      map((response) => {
        return { data: response, totalItems: 18 };
      }),
    );
  }

}
