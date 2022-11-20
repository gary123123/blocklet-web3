import { formatHash, formatBtcValue, formatTxAddress } from '../format';

describe('capitalize', () => {
  it('formatHash error', () => {
    expect(formatHash()).toBe('-');
    expect(
      formatHash(
        'b88a02199d8e3ea977aa66457801994031eeb6ca79bb16a4d09211af4e84f6ed',
      ),
    ).toBe('b88a-f6ed');
  });
  it('formatBtcValue error', () => {
    expect(formatBtcValue()).toBe('0');
    expect(formatBtcValue(90000000)).toBe('0.90000000');
  });
  it('formatTxAddress error', () => {
    expect(
      formatTxAddress(
        'bc1qwqdg6squsna38e46795at95yu9atm8azzmyvckulcc7kytlcckxswvvzej',
      ),
    ).toBe('bc1qwqdg6-kxswvvzej');
  });
});
