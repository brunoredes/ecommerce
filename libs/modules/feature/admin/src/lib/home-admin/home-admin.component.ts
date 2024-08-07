import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ApiResponse, User, UserService } from '@ecommerce/admin-data-access';
import { AdminCardComponent } from '@ecommerce/admin-ui';
import { LoadingSpinnerComponent } from '@ecommerce/ui';
import { Observable } from 'rxjs';
@Component({
  selector: 'lib-home-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatGridListModule,
    MatIcon,
    AdminCardComponent,
    MatPaginatorModule,
    AsyncPipe,
    LoadingSpinnerComponent
  ],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeAdminComponent {
  private readonly userService = inject(UserService);
  totalItems = 0;
  pageSize = 4;
  pagesOptions = [4, 6, 10, 15, 18];
  currentPage = 0;
  users$!: Observable<ApiResponse<User>>;

  constructor() {
    this.loadUsers();
  }

  loadUsers() {
    const page = this.currentPage + 1;
    this.users$ = this.userService.getUsers(page, this.pageSize);
  }

  pageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadUsers();
  }
}
