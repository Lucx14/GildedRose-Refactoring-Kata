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
    for (var i = 0; i < this.items.length; i++) {
      
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
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
    // maybe a seperate function to run the update 
  }






}
