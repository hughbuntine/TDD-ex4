export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  // This is the one that passed all the coverage tests
  updateQualityOld() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
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
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
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

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name == "Aged Brie") {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
        }

        this.items[i].sellIn = this.items[i].sellIn - 1;

        if (this.items[i].sellIn < 0) {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
      else if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;

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
        
        this.items[i].sellIn = this.items[i].sellIn - 1;

        if (this.items[i].sellIn < 0) {
          this.items[i].quality = this.items[i].quality - this.items[i].quality;
        }

      }
      else if (this.items[i].name == "Sulfuras, Hand of Ragnaros") {
        // nothing
      }
      else if (this.items[i].name == "Conjured") {
        if (this.items[i].quality > 0) {
          this.items[i].quality = this.items[i].quality - 2;
        }

        this.items[i].sellIn = this.items[i].sellIn - 1;

        if (this.items[i].sellIn < 0) {
          if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 2;
          }
        }
      }
      else {
        if (this.items[i].quality > 0) {
          this.items[i].quality = this.items[i].quality - 1;
        }

        this.items[i].sellIn = this.items[i].sellIn - 1;

        if (this.items[i].sellIn < 0) {
          if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      }
    }
    return this.items;
  }
}
