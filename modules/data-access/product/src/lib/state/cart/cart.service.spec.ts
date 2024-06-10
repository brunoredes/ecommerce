import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { productsMock } from '../../mocks/product.mock';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add product to cart', () => {
    service.addToCard(productsMock[0]);
    expect(service.quantity()).toBe(1);

    service.addToCard(productsMock[3]);
    expect(service.quantity()).toBe(2);
  });
});
