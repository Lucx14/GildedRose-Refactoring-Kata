describe('Item', () => {

  let item;

  beforeEach(() => {
    item = new Item("foo", 0, 0);
  });

  it('Item name', () => {
    expect(item.name).toEqual("foo");
  });

  it('Item quality', () => {
    expect(item.quality).toEqual(0);
  });

  it('Item sellIn', () => {
    expect(item.sellIn).toEqual(0);
  });
});

describe('Normal', () => {
  let item;

  beforeEach(() => {
    item = new Normal("normal product", 2, 4);
  });

  it('sellIn days count down by 1 each update', () => {
    item.update();
    expect(item.sellIn).toEqual(1);
  });

  it('quality -1 each update if sellIn >= 0', () => {
    item.update();
    expect(item.quality).toEqual(3);
  });

  it('quality -2 each update if sellIn < 0', () => {
    item.update();
    item.update();
    item.update();
    expect(item.quality).toEqual(0);
  });

  it('quality cannot be < 0', () => {
    item.update();
    item.update();
    item.update();
    item.update();
    expect(item.quality).toEqual(0);
  });
});


describe('Aged Brie', () => {
  let item;

  beforeEach(() => {
    item = new AgedBrie("Aged Brie", 2, 0);
  });

  it('sellIn days count down by 1 each update', () => {
    item.update();
    expect(item.sellIn).toEqual(1);
  });
  it('quality +1 if sellIn >= 0', () => {
    item.update();
    expect(item.quality).toEqual(1);
  });
  it('quality +2 if sellIn < 0', () => {
    item.update();
    item.update();
    item.update();
    expect(item.quality).toEqual(4);
  });
  it('quality cannot be > 50', () => {
    let times = 50;
        for (let i=0; i < times; i++) {
          item.update();
        }
        expect(item.quality).toEqual(50);
  });
});

describe('Backstage Passes', () => {
  let item;

  beforeEach(() => {
    item = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 15, 20);
  });

  it('sellIn days count down by 1 each update', () => {
    item.update();
    expect(item.sellIn).toEqual(14);
  });
  it('quality +1 if sellIn > 10', () => {
    item.update();
    expect(item.quality).toEqual(21);
  });
  it('quality +2 if 6 <= sellIn <= 10', () => {
    let times = 7;
        for (let i=0; i < times; i++) {
          item.update();
        }
        expect(item.quality).toEqual(29);
  });
  it('quality +3 if sellIn <= 5', () => {
    let times = 14;
        for (let i=0; i < times; i++) {
          item.update();
        }
        expect(item.quality).toEqual(47);
  });
  it('quality 0 when sellIn < 0', () => {
    let times = 16;
        for (let i=0; i < times; i++) {
          item.update();
        }
        expect(item.quality).toEqual(0);
  });
  it('quality max is 50', () => {
    let item2 = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 10, 49);
        item2.update();
        item2.update();
        item2.update();
        expect(item2.quality).toEqual(50);
  });

});

describe('Sulfuras', () => {
  let item;

  beforeEach(() => {
    item = new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80);
  });

  it('constant quality of 80', () => {
    item.update();
    expect(item.quality).toEqual(80);
  });
  it('sellIn doesnt change', () => {
    item.update();
    expect(item.sellIn).toEqual(0);
  });
});

describe('Conjured', () => {
  let item;

  beforeEach(() => {
    item = new Conjured("Conjured product", 2, 10);
  });

  it('sellIn days count down by 1 each update', () => {
    item.update();
    expect(item.sellIn).toEqual(1);
  });
  it('quality -2 each update if sellIn >= 0', () => {
    item.update();
    expect(item.quality).toEqual(8);
  });
  it('quality -4 each update if sellIn < 0', () => {
    item.update();
    item.update();
    item.update();
    expect(item.quality).toEqual(2)
  });
  it('quality cannot be < 0', () => {
    item.update();
    item.update();
    item.update();
    item.update();
    expect(item.quality).toEqual(0);
  });
});
