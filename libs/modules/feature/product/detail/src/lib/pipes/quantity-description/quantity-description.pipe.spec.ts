import { Quantity } from '../../enums/quantity.enum';
import { QuantityDescriptionPipe } from './quantity-description.pipe';

describe('QuantityDescriptionPipe', () => {
  let pipe: QuantityDescriptionPipe;

  beforeEach(() => {
    pipe = new QuantityDescriptionPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it("should return 'última unidade' when quantity is 1", () => {
    const quantity = 1;
    expect(pipe.transform(quantity)).toBe(Quantity.LAST_UNITY);
  });

  it("should return 'Produto indisponível' when quantity is 0", () => {
    const quantity = 0;
    const transformedData = pipe.transform(quantity);
    expect(transformedData).toBe(Quantity.UNAVAILABLE);
  });

  it("should return 'x unidades disponíveis' based on quantity", () => {
    const quantity = 59;
    const transformedData = pipe.transform(quantity);
    expect(transformedData).toBe(`${quantity} ${Quantity.AVALIABLE}`);
  });
});
