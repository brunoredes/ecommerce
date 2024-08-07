import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserSearchService } from '@ecommerce/user-data-access';
import { getParams } from 'libs/modules/feature/product/detail/src/lib/product-detail/get-params';
import { switchMap } from 'rxjs';

@Component({
  selector: 'lib-user-detail',
  standalone: true,
  imports: [CommonModule, AsyncPipe, JsonPipe],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  private readonly userSearchService = inject(UserSearchService);

  public user$ = getParams().pipe(
    switchMap((id) => this.userSearchService.getById(id)),
  );
}
