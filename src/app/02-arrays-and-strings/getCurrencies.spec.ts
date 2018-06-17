import { getCurrencies } from './getCurrencies';

describe('GetCurrencies', () => {
  it('Should return the supported currencies', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  });
});
