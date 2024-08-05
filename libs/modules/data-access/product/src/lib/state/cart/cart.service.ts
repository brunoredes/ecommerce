import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // private readonly cartSubject$ = new BehaviorSubject<Product[]>([]);

  // public cart$ = this.cartSubject$.asObservable();

  // public addToCart(product: Product) {
  //   const currentCard = this.cartSubject$.getValue();
  //   this.cartSubject$.next([...currentCard, product]);
  // }

  private readonly cartSignal = signal<Product[]>([]);
  public cart = this.cartSignal.asReadonly();
  public quantity = computed(() => this.cart().length);

  public addToCard(product: Product) {
    this.cartSignal.update((products) => [...products, product]);
  }
}
