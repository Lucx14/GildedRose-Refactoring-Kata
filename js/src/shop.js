'use strict'

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

  getItemClass(item) {
    const classNames = Object.keys(this.itemClasses);
    return classNames.find(name => item.name.includes(name)) || 'default';
  }

  categorize() {
    this.categorizedItems = [];
    this.items.forEach(item => {
      const CorrectClass = this.itemClasses[this.getItemClass(item)];
      this.categorizedItems.push(new CorrectClass(item.name, item.sellIn, item.quality));
    });
  }

  runStockUpdate() {
    this.categorizedItems.forEach((item, index) => {
      this.items[index].sellIn = item.sellIn;
      this.items[index].quality = item.quality;
    });
  }

  updateQuality() {
    this.categorize();
    this.categorizedItems.forEach(item => {
      item.update();
    });
    this.runStockUpdate();
  }
}
