import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductSearchService {
  private readonly http: HttpClient = inject(HttpClient);
  public readonly apiUrl = 'https://65009f9718c34dee0cd53786.mockapi.io';

  public searchByName(name: Product['name']): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/api/products`, {
      params: {
        name,
      },
    });
  }
}
