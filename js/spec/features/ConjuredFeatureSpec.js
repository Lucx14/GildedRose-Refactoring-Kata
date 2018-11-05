'use strict'

describe('Features: Conjured items', () => {

  let gildedRose;

  beforeEach(() => {
    gildedRose = new Shop([ new Item('Conjured product', 2, 10) ]);
  });
  it('sellIn days count down by 1 for each update', () => {
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toEqual(1);
  });
  it('quality is reduced by 2 each update before the sell in date', () => {
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(8);
  });
  it('quality is reduced by 4 each update after the sell in date', () => {
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(2);
  });
  it('quality cannot be less than zero', () => {
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(0);
  });
});
  