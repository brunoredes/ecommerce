import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../environments';

@Injectable({
  providedIn: 'root',
})
export class ProductSearchService {
  private readonly http: HttpClient = inject(HttpClient);
  public readonly apiUrl = environment.apiUrl;

  public searchByName(name: Product['name']): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`, {
      params: {
        name,
      },
    });
  }

  public getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }
}
