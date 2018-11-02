describe('Item class', () => {

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