import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { By } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, RouterModule } from '@angular/router';
import { AuthService } from '@ecommerce/auth-data-access';
import { UiModule } from '@ecommerce/ui';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let authService: AuthService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        UiModule,
      ],
      providers: [
        {
          provide: AuthService,
          useValue: {
            isAuthenticated: jest.fn(),
            logout: jest.fn(),
          },
        },
        provideRouter([]),
        provideAnimationsAsync(),
      ],
    })
      .overrideComponent(AppComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display actions template when authenticated', () => {
    jest.spyOn(authService, 'isAuthenticated').mockReturnValue(true);
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(
      By.css('button[title="Sair"]'),
    );
    expect(buttonElement).toBeTruthy();
  });
  it('should display empty template when not authenticated', () => {
    jest.spyOn(authService, 'isAuthenticated').mockReturnValue(false);
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(
      By.css('button[title="Sair"]'),
    );
    expect(buttonElement).toBeFalsy();
  });
  it('should call logout method on button click', () => {
    jest.spyOn(authService, 'isAuthenticated').mockReturnValue(true);
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(
      By.css('button[title="Sair"]'),
    );
    buttonElement.nativeElement.click();
    expect(authService.logout).toHaveBeenCalled();
  });
  it('should display navigation template when authenticated', () => {
    jest.spyOn(authService, 'isAuthenticated').mockReturnValue(true);
    fixture.detectChanges();
    const navElement = fixture.debugElement.query(
      By.css('a[routerLink="/home"]'),
    );
    expect(navElement).toBeTruthy();
  });
  it('should display login template when not authenticated', () => {
    jest.spyOn(authService, 'isAuthenticated').mockReturnValue(false);
    fixture.detectChanges();
    const navElement = fixture.debugElement.query(
      By.css('a[routerLink="/home"]'),
    );
    expect(navElement).toBeFalsy();
  });
});
