import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  CartService,
  ProductSearchService,
} from '@ecommerce/product-data-access';
import { switchMap } from 'rxjs';
import { getParams } from './get-params';
import { ProductCardComponent } from '@ecommerce/product-card';
import { QuantityDescriptionPipe } from '../pipes/quantity-description/quantity-description.pipe';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    JsonPipe,
    ProductCardComponent,
    QuantityDescriptionPipe,
    MatButtonModule,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  private readonly productSearchService = inject(ProductSearchService);
  protected readonly cartService = inject(CartService);

  public product$ = getParams().pipe(
    switchMap((id) => this.productSearchService.getById(id)),
  );
}
