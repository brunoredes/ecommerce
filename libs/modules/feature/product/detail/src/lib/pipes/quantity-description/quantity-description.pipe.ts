import { Pipe, PipeTransform } from '@angular/core';
import { Quantity } from '../../enums/quantity.enum';

@Pipe({
  name: 'quantityDescription',
  standalone: true,
  pure: true,
})
export class QuantityDescriptionPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (value === 0) {
      return Quantity.UNAVAILABLE;
    }
    if (value === 1) {
      return Quantity.LAST_UNITY;
    }
    return `${value} ${Quantity.AVALIABLE}`;
  }
}
