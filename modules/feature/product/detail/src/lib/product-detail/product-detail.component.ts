import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductSearchService } from '@ecommerce/product-data-access';
import { switchMap } from 'rxjs';
import { getParams } from './get-params';

@Component({
  selector: 'lib-product-detail',
  standalone: true,
  imports: [CommonModule, AsyncPipe, JsonPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  private productSearchService = inject(ProductSearchService);

  public product$ = getParams().pipe(
    switchMap((id) => this.productSearchService.getById(id)),
  );
}
