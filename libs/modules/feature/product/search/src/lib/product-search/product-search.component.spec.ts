import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  ProductSearchService,
  productsMock,
} from '@ecommerce/product-data-access';
import { of } from 'rxjs';
import { ProductSearchComponent } from './product-search.component';

describe('ProductSearchComponent', () => {
  let component: ProductSearchComponent;
  let fixture: ComponentFixture<ProductSearchComponent>;
  let service: ProductSearchService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchComponent, NoopAnimationsModule],
      providers: [
        {
          provide: ProductSearchService,
          useValue: {
            searchByName: () => of(productsMock),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSearchComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductSearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should debounce when input field is changed', fakeAsync(() => {
    jest.spyOn(service, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    input.value = 'pc';
    input.dispatchEvent(new Event('input'));

    expect(service.searchByName).not.toHaveBeenCalled();

    tick(500);

    expect(service.searchByName).toHaveBeenCalledWith(input.value);
  }));

  it('should search multiple times', fakeAsync(() => {
    jest.spyOn(service, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    input.value = 'pc';
    input.dispatchEvent(new Event('input'));

    tick(500);

    input.value = 'Tv samsung 43 polegadas';
    input.dispatchEvent(new Event('input'));

    tick(500);

    expect(service.searchByName).toHaveBeenCalledTimes(2);
  }));
  it('should prevent identical submissions', fakeAsync(() => {
    jest.spyOn(service, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    input.value = 'Tv samsung 43 polegadas';
    input.dispatchEvent(new Event('input'));

    tick(500);

    input.value = 'Tv samsung 43 polegadas';
    input.dispatchEvent(new Event('input'));

    tick(500);

    expect(service.searchByName).toHaveBeenCalledTimes(1);
  }));
  it('should prevent empty submissions', fakeAsync(() => {
    jest.spyOn(service, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    input.value = '';
    input.dispatchEvent(new Event('input'));

    tick(500);

    expect(service.searchByName).not.toHaveBeenCalled();
  }));
  it('should return products observable correctly', () => {
    component.products$.subscribe({
      next: (data) => {
        expect(data).toBe(productsMock);
      },
    });
  });
});
