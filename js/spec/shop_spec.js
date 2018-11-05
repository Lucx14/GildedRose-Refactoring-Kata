'use strict'

describe('Shop class: Unit tests', () => {

  describe('getItemClass', () => {
    it('will get the correct key from the itemClasses matrix', () => {
      let gildedRose = new Shop([{ name: "Aged Brie", sellIn: 2, quality: 0 }]);
      expect(gildedRose.getItemClass(gildedRose.items[0])).toEqual('Aged Brie');
    });
  });

  describe('categorize', () => {
    it('creates a new constructor variable containing categorized items', () => {
      let gildedRose = new Shop([{ name: "Aged Brie", sellIn: 2, quality: 0 }]);
      gildedRose.categorize();
      expect(gildedRose.categorizedItems[0]).toEqual(jasmine.any(AgedBrie));
    });
  });

  describe('runStockUpdate', () => {
    it('updates the item objects sellIn and quality', () => {
      let gildedRose = new Shop([{ name: "Aged Brie", sellIn: 2, quality: 0 }]);
      gildedRose.categorize();
      gildedRose.runStockUpdate();
      expect(gildedRose.items[0].quality).toEqual(0);
    });
  });

  describe('update quality', () => {
    it('updates the quality and sellin dates', () => {
      let gildedRose = new Shop([{ name: "Aged Brie", sellIn: 2, quality: 0 }]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(1);
    });
  });

});


// private method example to think about....
// const _resetTable = Symbol('resetTable');

// resetTable(tableName) {
//   this.replaceTable(tableName, this.initialData(tableName))
// }


// [_resetTable](tableName) {
//   this[_replaceTable](tableName, this[_initialData](tableName))
// }


  