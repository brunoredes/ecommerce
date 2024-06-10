import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartMessageAnnouncerComponent } from './cart-message-announcer.component';

describe('cart-message-announcer', () => {
  let component: CartMessageAnnouncerComponent;
  let fixture: ComponentFixture<CartMessageAnnouncerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartMessageAnnouncerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartMessageAnnouncerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
