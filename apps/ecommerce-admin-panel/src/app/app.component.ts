import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '@ecommerce/auth-data-access';
import { UiModule } from '@ecommerce/ui';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    UiModule,
    MatListModule,
    CommonModule,
    MatButton,
    MatFabButton,
    MatIcon,
    MatSidenavModule,
    RouterLink
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly authService = inject(AuthService);

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
  }
}
