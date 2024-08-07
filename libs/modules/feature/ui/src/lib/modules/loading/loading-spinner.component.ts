import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '@ecommerce/admin-data-access';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'ecommerce-loading-spinner',
  standalone: true,
  imports: [CommonModule, MatProgressSpinner],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSpinnerComponent {
  public readonly loadingService = inject(LoadingService);
}
