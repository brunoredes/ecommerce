import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { productsMock } from '../mocks/product.mock';
import { Product } from '../models/product.model';
import { ProductSearchService } from './product-search.service';
import { environment } from '../../environments';

describe('ProductSearchService', () => {
  let service: ProductSearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(ProductSearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products correctly', () => {
    const mockName = 'notebook';
    const url = `${environment.apiUrl}/products?name=${mockName}`;
    let result: Product[] = [];

    service
      .searchByName(mockName)
      .subscribe({ next: (product) => (result = product) });

    const request = httpMock.expectOne(url);
    request.flush(productsMock);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(productsMock);
  });

  it('should return product by id correctly', () => {
    const mockId = '123';
    const url = `${environment.apiUrl}/products/${mockId}`;
    let result!: Product;

    service
      .getById(mockId)
      .subscribe({ next: (product) => (result = product) });

    const request = httpMock.expectOne(url);
    request.flush(productsMock[0]);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(productsMock[0]);
  });
});
