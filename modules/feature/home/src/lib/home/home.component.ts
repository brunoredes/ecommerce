import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Product } from 'modules/data-access/product/src/lib/models/product.model';
import { productsMock } from '@ecommerce/product-data-access';
@Component({
  selector: 'ecommerce-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public products = input<Product[]>(productsMock);
}
