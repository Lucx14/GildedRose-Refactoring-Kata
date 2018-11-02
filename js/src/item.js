class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}


class Normal extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }

  update() {
    this.sellIn -= 1;
    this.sellIn < 0 ? this.quality -= 2 : this.quality -= 1;
    this.quality <= 0 ? this.quality = 0 : null;
  }
}


