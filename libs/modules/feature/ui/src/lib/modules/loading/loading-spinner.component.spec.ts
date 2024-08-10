import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingSpinnerComponent } from './loading-spinner.component';
import { LoadingService } from '@ecommerce/admin-data-access';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponent>;
  let loadingService: LoadingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatProgressSpinnerModule,
      ],
      declarations: [],
      providers: [
        {
          provide: LoadingService,
          useValue: {
            loading: jest.fn(),
          },
        },
      ],
    })
      .overrideComponent(LoadingSpinnerComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(LoadingSpinnerComponent);
    component = fixture.componentInstance;
    loadingService = TestBed.inject(LoadingService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display spinner when loading is true', () => {
    jest.spyOn(loadingService, 'loading').mockReturnValue(true);
    fixture.detectChanges();

    const spinnerElement = fixture.debugElement.query(By.css('mat-spinner'));
    const loadingText = fixture.debugElement.query(By.css('span'));

    expect(spinnerElement).toBeTruthy();
    expect(loadingText.nativeElement.textContent).toContain('Carregando');
  });

  it('should not display spinner when loading is false', () => {
    jest.spyOn(loadingService, 'loading').mockReturnValue(false);
    fixture.detectChanges();

    const spinnerElement = fixture.debugElement.query(By.css('mat-spinner'));
    const loadingText = fixture.debugElement.query(By.css('span'));

    expect(spinnerElement).toBeFalsy();
    expect(loadingText).toBeFalsy();
  });
});
