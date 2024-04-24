import { ComponentFixture, TestBed } from '@angular/core/testing';
import { productsMock } from '@ecommerce/product-data-access';
import { ProductCardComponent } from './product-card.component';
import { MatCardModule } from '@angular/material/card';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent, MatCardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('product', productsMock[0]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product card info correctly', () => {
    const card: HTMLElement = fixture.nativeElement.querySelector('mat-card');
    const product = component.product;
    expect(card.textContent).toContain(product.name);
    expect(card.textContent).toContain(product.price);
  });
});
