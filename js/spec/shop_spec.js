describe('Shop class', () => {
// these are really mainly feature tests!!
  describe('updateQuality function', () => {

    

    describe('Backstage passes', () => {
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

    describe('Sulfuras', () => {
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


  
  });



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
  

