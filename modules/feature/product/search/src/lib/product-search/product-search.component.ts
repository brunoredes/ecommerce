import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductSearchService } from '@ecommerce/product-data-access';
import { Product } from 'modules/data-access/product/src/lib/models/product.model';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'ecommerce-product-search',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent implements OnInit {
  private readonly productSearchService = inject(ProductSearchService);

  control = new FormControl(
    {
      value: '',
      disabled: false,
    },
    { nonNullable: true },
  );

  products$!: Observable<Product[]>;

  ngOnInit() {
    this.products$ = this.control.valueChanges.pipe(
      // BORA UTILIZAR OS OPERADORES
      debounceTime(500),
      distinctUntilChanged(),
      filter((text: string) => text.length > 1),
      switchMap((text) => this.productSearchService.searchByName(text)),
    );
  }
}
