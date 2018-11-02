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
      });
    
    });

  });
  
});
