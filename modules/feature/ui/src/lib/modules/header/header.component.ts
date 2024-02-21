import { Component, InputSignal, input } from '@angular/core';

@Component({
  selector: 'ecommerce-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public title: InputSignal<string> = input.required();
}
