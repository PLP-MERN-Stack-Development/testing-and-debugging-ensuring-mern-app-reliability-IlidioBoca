const { calculateTotal } = require('../../src/utils/calculateTotal');

describe('calculateTotal (server util)', () => {
  it('retorna 0 se não for array', () => {
    expect(calculateTotal(null)).toBe(0);
  });

  it('soma preços corretamente', () => {
    const items = [{ price: 10 }, { price: 20 }, { price: 5 }];
    expect(calculateTotal(items)).toBe(35);
  });

  it('ignora itens sem price', () => {
    const items = [{ price: 10 }, {}, { price: 5 }];
    expect(calculateTotal(items)).toBe(15);
  });
});
