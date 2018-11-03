describe('Features: Aged Brie', () => {
  let gildedRose;

  beforeEach(() => {
    gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
  });

  it('sellIn days count down', () => {
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toEqual(-3);
  });

  it('quality increases by 1 for each update before sellIn date', () => {
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(2);
  });
  it('quality increments by 2 after the sellIn date', () => {
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(8);
  });
  it('quality has max limit of 50', () => {
    let times = 50;
    for (let i=0; i < times; i++) {
      gildedRose.updateQuality();
    }
    expect(gildedRose.items[0].quality).toEqual(50);
  });
});