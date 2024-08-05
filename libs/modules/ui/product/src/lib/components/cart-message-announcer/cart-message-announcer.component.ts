import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ecommerce-cart-message-announcer',
  standalone: true,
  imports: [CommonModule, MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './cart-message-announcer.component.html',
  styleUrl: './cart-message-announcer.component.scss',
})
export class CartMessageAnnouncerComponent {
  @Input() quantity = 0;
}
