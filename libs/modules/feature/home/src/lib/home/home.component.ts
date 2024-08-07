import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '@ecommerce/product-card';
import { RecommendedProductsService } from '@ecommerce/product-data-access';

@Component({
  selector: 'ecommerce-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly recommendedProductsService = inject(
    RecommendedProductsService,
  );

  public products$ = this.recommendedProductsService.getProducts();

  // constructor(private recommendedProductsService: RecommendedProductsService) {}
}
