import { ComponentFixture, TestBed } from '@angular/core/testing';
import { productsMock, RecommendedProductsService } from '@ecommerce/product-data-access';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        {
          provide: RecommendedProductsService,
          useValue: {
            getProducts: () => of(productsMock),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product cards correctly', () => {
    const cards: HTMLElement[] = fixture.nativeElement.querySelectorAll(
      'ecommerce-product-card',
    );
    expect(cards.length).toBe(productsMock.length);
  });
});
