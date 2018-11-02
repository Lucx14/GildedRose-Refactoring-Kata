describe('Gilded Rose', () => {

  describe('Item constructor', () => {

    let gildedRose;

    beforeEach(() => {
      gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    });

    it('Item name', () => {
      expect(gildedRose.items[0].name).toEqual("foo");
    });
  
    it('Item quality', () => {
      expect(gildedRose.items[0].quality).toEqual(0);
    });

    it('Item sellIn', () => {
      expect(gildedRose.items[0].sellIn).toEqual(0);
    });
  });
  

  describe('Aged Brie', () => {
    it('Aged Brie item name', () => {
      const gildedRose = new Shop([ new Item('Aged Brie', 2, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual('Aged Brie');
    });
    it('Aged Brie item sellIn number of days', () => {
      const gildedRose = new Shop([ new Item('Aged Brie', 2, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual('Aged Brie');
    });
  }); 
});
