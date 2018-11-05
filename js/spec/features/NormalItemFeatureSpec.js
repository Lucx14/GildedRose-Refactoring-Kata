'use strict'

describe('Features: Normal items', () => {

  let gildedRose;

  beforeEach(() => {
    gildedRose = new Shop([ new Item('Normal product', 2, 10) ]);
  });
  it('sellIn days count down by 1 for each update', () => {
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toEqual(1);
  });
  it('quality is reduced by 1 each update before the sell in date', () => {
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(9);
  });
  it('quality is reduced by 2 each update after the sell in date', () => {
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(4);
  });
  it('quality cannot be less than zero', () => {
    let times = 16;
    for (let i=0; i < times; i++) {
      gildedRose.updateQuality();
    }
    expect(gildedRose.items[0].quality).toEqual(0);
  });
});
