import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardMdImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { User } from '@ecommerce/admin-data-access';

@Component({
  selector: 'lib-ecommerce-admin-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardContent,
    MatCardMdImage,
    MatCardSubtitle,
    MatCardTitle,
    MatFabButton,
    MatIcon,
    NgOptimizedImage
  ],
  templateUrl: './admin-card.component.html',
  styleUrl: './admin-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCardComponent {
  user = input.required<User>();
}
