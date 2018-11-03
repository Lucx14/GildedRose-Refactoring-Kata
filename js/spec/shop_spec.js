describe('Shop class: Unit tests', () => {

  describe('getItemClass', () => {
    it('will get the correct key from the itemClasses matrix', () => {
      let gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
      expect(gildedRose.getItemClass(gildedRose.items[0])).toEqual('Aged Brie');
    });
  });

  describe('categorize', () => {
    it('creates a new constructor variable containing categorized items', () => {
      let gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
      gildedRose.categorize();
      expect(gildedRose.categorizedItems[0]).toEqual(jasmine.any(AgedBrie));
    });
  });

  describe('runStockUpdate', () => {
    it('updates the item objects sellIn and quality', () => {
      let gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
      gildedRose.categorize();
      gildedRose.runStockUpdate();
      expect(gildedRose.items[0].quality).toEqual(0);
    });
  });

  // describe('update quality', () => {
  //   let gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
  //     gildedRose.categorize();
  //     gildedRose.runStockUpdate();
  //     gildedRose.updateQuality();
  //     expect(item.update()).toHaveBeenCalled();
  // });

});
  

