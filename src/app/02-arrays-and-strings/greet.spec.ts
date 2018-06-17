import { greet } from './greet';

describe('Greet', () => {
  it('Should include the name in the message', () => {
    const result = greet('Youness');
    expect(result).toContain('Youness');
  });
});
