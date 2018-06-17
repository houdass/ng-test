import { compute } from './compute';

describe('Compute', () => {
  it('Should return zero if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('Should increment the input if it is positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
