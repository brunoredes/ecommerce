import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

const mockTitle = 'Mock Title';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.title = mockTitle;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a dynamic title', () => {
    fixture.detectChanges();
    const title: HTMLHeadingElement =
      fixture.nativeElement.querySelector('.header__logo');
    expect(title.textContent).toEqual(mockTitle);

    component.title = 'Another title';
    fixture.detectChanges();
    expect(title.textContent).toBe('Another title');
  });

  it('should redirect to "/" when logo is is clicked', () => {
    const anchor: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(anchor.getAttribute('href')).toBe('/');
  });
});
