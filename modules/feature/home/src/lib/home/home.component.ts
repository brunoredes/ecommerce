import { AsyncPipe, CommonModule } from '@angular/common';
import {
  Component,
  // inject
} from '@angular/core';
import { RecommendedProductsService } from 'modules/data-access/product/src/lib/recommended-products/recommended-products.service';
import { ProductCardComponent } from 'modules/ui/product/src/lib/product-card/product-card.component';
@Component({
  selector: 'ecommerce-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public products$ = this.recommendedProductsService.getProducts();

  constructor(private recommendedProductsService: RecommendedProductsService) {}
  // private readonly recommendedProductsService = inject(
  //   RecommendedProductsService,
  // );
}
