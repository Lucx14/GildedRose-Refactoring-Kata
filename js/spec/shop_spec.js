'use strict'

describe('Shop class: Unit tests', () => {

  let gildedRose;

  beforeEach(() => {
    gildedRose = new Shop([{ name: "Aged Brie", sellIn: 2, quality: 0 },
                            { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15, quality: 20 },
                            { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
                            { name: "Conjured Mana Cake", sellIn: 3, quality: 6 },
                            { name: "Elixir of the Mongoose", sellIn: 5, quality: 7 }
  ]);
    gildedRose.updateQuality();
  });

  describe('Aged Brie', () => {
    it('updates the quality', () => {
      expect(gildedRose.items[0].quality).toEqual(1);
    });

    it('updates the sellIn', () => {
      expect(gildedRose.items[0].sellIn).toEqual(1);
    });

    it('creates a new constructor variable containing categorized items', () => {
      expect(gildedRose.categorizedItems[0]).toEqual(jasmine.any(AgedBrie));
    });
  });

  describe('Backstage Pass', () => {
    it('updates the quality', () => {
      expect(gildedRose.items[1].quality).toEqual(21);
    });

    it('updates the sellIn', () => {
      expect(gildedRose.items[1].sellIn).toEqual(14);
    });

    it('creates a new constructor variable containing categorized items', () => {
      expect(gildedRose.categorizedItems[1]).toEqual(jasmine.any(BackstagePass));
    });
  });

  describe('Sulfuras', () => {
    it('updates the quality', () => {
      expect(gildedRose.items[2].quality).toEqual(80);
    });

    it('updates the sellIn', () => {
      expect(gildedRose.items[2].sellIn).toEqual(0);
    });

    it('creates a new constructor variable containing categorized items', () => {
      expect(gildedRose.categorizedItems[2]).toEqual(jasmine.any(Sulfuras));
    });
  });

  describe('Conjured', () => {
    it('updates the quality', () => {
      expect(gildedRose.items[3].quality).toEqual(4);
    });

    it('updates the sellIn', () => {
      expect(gildedRose.items[3].sellIn).toEqual(2);
    });

    it('creates a new constructor variable containing categorized items', () => {
      expect(gildedRose.categorizedItems[3]).toEqual(jasmine.any(Conjured));
    });
  });

  describe('Normal', () => {
    it('updates the quality', () => {
      expect(gildedRose.items[4].quality).toEqual(6);
    });

    it('updates the sellIn', () => {
      expect(gildedRose.items[4].sellIn).toEqual(4);
    });

    it('creates a new constructor variable containing categorized items', () => {
      expect(gildedRose.categorizedItems[4]).toEqual(jasmine.any(Normal));
    });
  });
});
