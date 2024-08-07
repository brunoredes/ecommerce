import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { By } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { mockResponse, UserService } from '@ecommerce/admin-data-access';
import { AdminCardComponent } from '@ecommerce/admin-ui';
import { of } from 'rxjs';
import { HomeAdminComponent } from './home-admin.component';

describe('HomeAdminComponent', () => {
  let component: HomeAdminComponent;
  let fixture: ComponentFixture<HomeAdminComponent>;
  let userServiceMock: any;

  beforeEach(async () => {
    userServiceMock = {
      getUsers: jest.fn().mockReturnValue(
        of({
          data: mockResponse,
          totalItems: 10,
        }),
      ),
    };

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatPaginatorModule,
        MatGridListModule,
        MatIconModule,
        AdminCardComponent,
      ],
      providers: [
        { provide: UserService, useValue: userServiceMock },
        provideAnimationsAsync(),
      ],
    })
      .overrideComponent(HomeAdminComponent, {
        set: {
          changeDetection: 0,
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(HomeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadUsers and initialize users$', () => {
    component.loadUsers();
    expect(userServiceMock.getUsers).toHaveBeenCalledWith(1, 3);
    component.users$.subscribe((users) => {
      expect(users.data.length).toBe(3);
      expect(users.totalItems).toBe(10);
    });
  });

  it('should update pagination when pageChange is triggered', () => {
    const pageEvent: PageEvent = { pageIndex: 1, pageSize: 6, length: 18 };
    component.pageChange(pageEvent);
    expect(component.currentPage).toBe(1);
    expect(component.pageSize).toBe(6);
    expect(userServiceMock.getUsers).toHaveBeenCalledWith(2, 6);
  });

  it('should render user cards correctly', () => {
    fixture.detectChanges();
    const userCards = fixture.debugElement.queryAll(
      By.css('lib-ecommerce-admin-card'),
    );
    expect(userCards.length).toBe(3);
  });

  it('should display the correct total items in the paginator', () => {
    const paginator = fixture.debugElement.query(By.css('mat-paginator'));
    expect(paginator).toBeTruthy();
    const length = paginator.componentInstance.length;
    expect(length).toBe(10);
  });
});
