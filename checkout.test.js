const Shop = require('./checkout')

describe('checkout', () => {
  it('returns 50 for 1 A', () => {
    const shop = new Shop();
    expect(shop.checkout('A')).toEqual(50);
  });
  it('returns 30 for 1 B', () => {
    const shop = new Shop();
    expect(shop.checkout('B')).toEqual(30);
  });
  it('returns 20 for 1 C', () => {
    const shop = new Shop();
    expect(shop.checkout('C')).toEqual(20);
  });
  it('returns 15 for 1 D', () => {
    const shop = new Shop();
    expect(shop.checkout('D')).toEqual(15);
  });
  it('returns 100 for 2A', () => {
    const shop = new Shop();
    expect(shop.checkout('AA')).toEqual(100);
  });
  it('returns 115 for ABCD', () => {
    const shop = new Shop();
    expect(shop.checkout('ABCD')).toEqual(115);
  });
  it('returns 130 for AAA', () => {
    const shop = new Shop();
    expect(shop.checkout('AAA')).toEqual(130);
  });
  it('returns 45 for BB', () => {
    const shop = new Shop();
    expect(shop.checkout('BB')).toEqual(45);
  });
  it('returns 210 for AAABBCD', () => {
    const shop = new Shop();
    expect(shop.checkout('AAABBCD')).toEqual(210);
  });
  it('returns 95 for BAB', () => {
    const shop = new Shop();
    expect(shop.checkout('BAB')).toEqual(95);
  });
  it('returns 150 for ACAA', () => {
    const shop = new Shop();
    expect(shop.checkout('ACAA')).toEqual(150);
  });
  it('returns 375 for ABAACAADAA', () => {
    const shop = new Shop();
    expect(shop.checkout('ABAACAADAA')).toEqual(375);
  });
  it('returns 220 for CBCBCBCBCB', () => {
    const shop = new Shop();
    expect(shop.checkout('CBCBCBCBCB')).toEqual(220);
  });
  it('returns -1 for abc', () => {
    const shop = new Shop();
    expect(shop.checkout('abc')).toEqual(-1);
  });
  it('returns -1 for abAAc', () => {
    const shop = new Shop();
    expect(shop.checkout('abAAc')).toEqual(-1);
  });
  it('returns -1 for 88B', () => {
    const shop = new Shop();
    expect(shop.checkout('88B')).toEqual(-1);
  });
})