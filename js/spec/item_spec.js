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

  it('quality -1 each update if sellIn > 0', () => {
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