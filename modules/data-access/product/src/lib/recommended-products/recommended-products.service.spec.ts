import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { productsMock } from '../mocks/product.mock';
import { RecommendedProductsService } from './recommended-products.service';
import { Product } from '../models/product.model';
import { environment } from '../../environments';

describe('RecommendedProductsService', () => {
  let service: RecommendedProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RecommendedProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return recommended products correctly', () => {
    const url = `${environment.apiUrl}/products?page=1&limit=6`;
    let result: Product[] = [];

    // Act
    service
      .getProducts()
      .subscribe({ next: (products) => (result = products) });

    // Assert
    const request = httpMock.expectOne(url);
    request.flush(productsMock);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(productsMock);
  });
});
