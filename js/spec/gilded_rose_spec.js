describe('Gilded Rose', () => {

  describe('Item class', () => {

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

  describe('Shop class', () => {

    describe('updateQuality function', () => {

      describe('Aged Brie', () => {
        let gildedRose;

        beforeEach(() => {
          gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
        });

        it('SellIn days count down', () => {
          gildedRose.updateQuality();
          gildedRose.updateQuality();
          gildedRose.updateQuality();
          gildedRose.updateQuality();
          gildedRose.updateQuality();
          expect(gildedRose.items[0].sellIn).toEqual(-3);
        });

        it('Quality increases by 1 for each update before sellIn date', () => {
          gildedRose.updateQuality();
          gildedRose.updateQuality();
          expect(gildedRose.items[0].quality).toEqual(2);
        });
        it('Quality increments by 2 after the sellIn date', () => {
          gildedRose.updateQuality();
          gildedRose.updateQuality();
          gildedRose.updateQuality();
          gildedRose.updateQuality();
          gildedRose.updateQuality();
          expect(gildedRose.items[0].quality).toEqual(8);
        });
        it('Quality has max limit of 50', () => {
          let times = 50;
          for (let i=0; i < times; i++) {
            gildedRose.updateQuality();
          }
          expect(gildedRose.items[0].quality).toEqual(50);

        });
      }); 
    
    });

  });
  
});
