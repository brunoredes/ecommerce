import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardMdImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { User } from '@ecommerce/admin-data-access';

@Component({
  selector: 'lib-ecommerce-admin-card',
  standalone: true,
  imports: [
    CommonModule,
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
