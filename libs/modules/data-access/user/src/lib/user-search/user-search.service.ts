import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {
  private readonly http: HttpClient = inject(HttpClient);
  public readonly apiUrl = environment.apiUrl;

  public getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/products/${id}`);
  }
}
