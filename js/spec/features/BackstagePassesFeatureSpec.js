'use strict'

describe('Features: Backstage passes', () => {
  let gildedRose;

  beforeEach(() => {
    gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20) ]);
  });

  it('sellIn days count down by 1 for each update', () => {
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toEqual(14);
  });
  it('quality increases by 1 when more than 10 days to concert', () => {
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(21);
  });
  it('quality increases by 2 when 6 - 10 days until concert', () => {
    let times = 7;
    for (let i=0; i < times; i++) {
      gildedRose.updateQuality();
    }
    expect(gildedRose.items[0].quality).toEqual(29);
  });
  it('quality increases by 3 when 5 or less days left', () => {
    let times = 14;
    for (let i=0; i < times; i++) {
      gildedRose.updateQuality();
    }
    expect(gildedRose.items[0].quality).toEqual(47);
  });
  it('quality drops to 0 after concert is over', () => {
    let times = 16;
    for (let i=0; i < times; i++) {
      gildedRose.updateQuality();
    }
    expect(gildedRose.items[0].quality).toEqual(0);
  });
  it('quality max is 50', () => {
    let gildedRose2 = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49) ]);
    gildedRose2.updateQuality();
    gildedRose2.updateQuality();
    gildedRose2.updateQuality();
    expect(gildedRose2.items[0].quality).toEqual(50);
  });
});