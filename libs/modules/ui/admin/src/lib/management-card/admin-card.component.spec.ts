import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { User } from '@ecommerce/admin-data-access';
import { faker } from '@faker-js/faker';
import { AdminCardComponent } from './admin-card.component';

describe('AdminCardComponent', () => {
  let component: AdminCardComponent;
  let fixture: ComponentFixture<AdminCardComponent>;

  const mockUser: User = {
    id: '1',
    name: 'John Doe',
    avatar: 'path/to/avatar.jpg',
    biography: 'This is a biography',
    createdAt: Date.now().toString(),
    email: faker.internet.email(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        NgOptimizedImage,
      ],
      providers: [provideRouter([])],
    })
      .overrideComponent(AdminCardComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(AdminCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('user', mockUser);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user name', () => {
    const element = fixture.debugElement.nativeElement as Document;
    const card = element.querySelector('span[mat-card-title]');
    expect(card?.textContent).toContain(mockUser.name);
  });

  it('should display user avatar', () => {
    const avatarElement = fixture.debugElement.query(
      By.css('img[mat-card-md-image]'),
    );
    expect(avatarElement.nativeElement.src).toContain(mockUser.avatar);
  });

  it('should display user biography', () => {
    const biographyElement = fixture.debugElement.query(
      By.css('mat-card-content'),
    );
    expect(biographyElement.nativeElement.textContent).toContain(
      mockUser.biography,
    );
  });

  it('should have a button to navigate to user details', () => {
    const buttonElement = fixture.debugElement.query(
      By.css('a[href]'),
    );
    expect(buttonElement.attributes['href']).toBe(`/user/${mockUser.id}`);
  });

  it('should have a delete button', () => {
    const deleteButtonElement = fixture.debugElement.query(
      By.css('button:not([routerLink])'),
    );
    expect(deleteButtonElement).toBeTruthy();
  });
});
