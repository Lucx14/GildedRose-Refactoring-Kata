describe('Features: Sulfuras', () => {
  let gildedRose;

  beforeEach(() => {
    gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
  });

  it('has a constant quality of 80', () => {
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(80);
  });
  it('never has to be sold (sellIn doesnt change)', () => {
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toEqual(0);
  });
});