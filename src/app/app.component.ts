import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductSearchComponent } from '@ecommerce/product-search';
import { UiModule } from '@ecommerce/ui';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  standalone: true,
  imports: [RouterModule, UiModule, ProductSearchComponent, MatSnackBarModule],
  selector: 'ecommerce-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce';
}
