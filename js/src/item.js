class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  update() {
    this.sellIn <= 0 ? this.quality -= 2 : this.quality -= 1;
    this.quality <= 0 ? this.quality = 0 : null;
    this.sellIn -= 1;
  }
}


class Normal extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }

  update() {
    this.sellIn <= 0 ? this.quality -= 2 : this.quality -= 1;
    this.quality <= 0 ? this.quality = 0 : null;
    this.sellIn -= 1;
  }
}


class AgedBrie extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }

  update() {
    this.sellIn <= 0 ? this.quality += 2 : this.quality += 1;
    this.quality >= 50 ? this.quality = 50 : null;
    this.sellIn -= 1;
  }
}

class BackstagePass extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }

  update() {
    switch(true) {
      case(this.sellIn <= 0):
        this.quality = 0;
        break;
      case(this.sellIn >= 0 && this.sellIn <= 5):
        this.quality += 3;
        break;
      case(this.sellIn > 5 && this.sellIn <= 10):
        this.quality += 2;
        break;
      case(this.sellIn > 10):
        this.quality += 1;
        break;
    }
    this.sellIn -= 1;
    this.quality >= 50 ? this.quality = 50 : null;
  }
}


class Sulfuras extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }
  update() {
    return;
  }
}


class Conjured extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }

  update() {
    this.sellIn <= 0 ? this.quality -= 4 : this.quality -= 2;
    this.quality < 0 ? this.quality = 0 : null;
    this.sellIn -= 1;
  }
}