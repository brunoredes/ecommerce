import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { input } from '@angular/core';

const mockTitle = 'Mock Title';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.title = input(mockTitle);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a dynamic title', () => {
    const title: HTMLHeadingElement =
      fixture.nativeElement.querySelector('.header__logo');
    expect(title.textContent).toEqual(mockTitle);

    component.title = input('Another title');
    fixture.detectChanges();
    expect(title.textContent).toBe('Another title');
  });
});
