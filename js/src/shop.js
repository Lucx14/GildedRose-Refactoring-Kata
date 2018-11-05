'use strict'

const _getItemClass = Symbol('getItemClass');
const _categorize = Symbol('categorize');
const _runStockUpdate = Symbol('runStockUpdate');

class Shop {
  constructor(items=[]){
    this.items = items;
    this.itemClasses = {
      'default': Normal,
      'Aged Brie': AgedBrie,
      'Backstage passes': BackstagePass,
      'Sulfuras': Sulfuras,
      'Conjured': Conjured
    }
  }

  updateQuality() {
    this[_categorize]();
    this.categorizedItems.forEach(item => {
      item.update();
    });
    this[_runStockUpdate]();
  }

  // Private

  [_getItemClass](item) {
    const classNames = Object.keys(this.itemClasses);
    return classNames.find(name => item.name.includes(name)) || 'default';
  }

  [_categorize]() {
    this.categorizedItems = [];
    this.items.forEach(item => {
      const CorrectClass = this.itemClasses[this[_getItemClass](item)];
      this.categorizedItems.push(new CorrectClass(item.name, item.sellIn, item.quality));
    });
  }

  [_runStockUpdate]() {
    this.categorizedItems.forEach((item, index) => {
      this.items[index].sellIn = item.sellIn;
      this.items[index].quality = item.quality;
    });
  }
}
