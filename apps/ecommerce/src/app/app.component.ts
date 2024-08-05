import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductSearchComponent } from '@ecommerce/product-search';
import { UiModule } from '@ecommerce/ui';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CartComponent } from '@ecommerce/product-card';
import { CartService } from '@ecommerce/product-data-access';
@Component({
  standalone: true,
  imports: [
    RouterModule,
    UiModule,
    ProductSearchComponent,
    MatSnackBarModule,
    CartComponent,
  ],
  selector: 'ecommerce-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  quantity = inject(CartService).quantity;
}
