import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecommerce-admin-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-card.component.html',
  styleUrl: './admin-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCardComponent {}
