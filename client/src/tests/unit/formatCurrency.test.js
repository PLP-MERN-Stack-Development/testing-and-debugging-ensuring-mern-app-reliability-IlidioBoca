import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  it('formata valores numéricos em MZN', () => {
    const result = formatCurrency(1000);
    expect(result).toContain('MT');
  });

  it('usa 0 como padrão se valor for undefined', () => {
    const result = formatCurrency();
    expect(result).toContain('0');
  });
});
