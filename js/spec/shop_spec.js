describe('Shop class', () => {

  describe('updateQuality function', () => {

    describe('Aged Brie', () => {
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

    describe('Normal product', () => {
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
  
  });

});
  

