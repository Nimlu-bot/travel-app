import { calcEchangRate } from './functions';

it('calc true exchange rate', () => {
    const rate = 100;
    const scale = 10;
    expect(calcEchangRate(rate, scale)).toBe(10);
});
