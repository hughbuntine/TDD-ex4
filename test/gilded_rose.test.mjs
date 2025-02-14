import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("foo 0 0", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });

  test("Aged Brie 0 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(2);
  });

  test("Backstage passes to a TAFKAL80ETC concert 0 0", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });

  test("Sulfuras, Hand of Ragnaros 0 0", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(0);
  });

  test("foo 100 0", () => {
    const gildedRose = new Shop([new Item("foo", 100, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(99);
    expect(items[0].quality).to.equal(0);
  });

  test("Aged Brie 100 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 100, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(99);
    expect(items[0].quality).to.equal(1);
  });

  test("Backstage passes to a TAFKAL80ETC concert 100 0", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 100, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(99);
    expect(items[0].quality).to.equal(1);
  });

  test("Sulfuras, Hand of Ragnaros 100 0", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 100, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(100);
    expect(items[0].quality).to.equal(0);
  });

  test("foo 0 100", () => {
    const gildedRose = new Shop([new Item("foo", 0, 100)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(98);
  });

  test("Aged Brie 0 100", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 100)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(100);
  });

  test("Backstage passes to a TAFKAL80ETC concert 0 100", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 100)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });

  test("Sulfuras, Hand of Ragnaros 0 100", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 100)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(100);
  });

  test("foo 0 50", () => {
    const gildedRose = new Shop([new Item("foo", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(48);
  });

  test("Aged Brie 0 50", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(50);
  });

  test("Backstage passes to a TAFKAL80ETC concert 0 50", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });

  test("Sulfuras, Hand of Ragnaros 0 50", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(50);
  });

  test("Backstage passes to a TAFKAL80ETC concert 8 0", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 8, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(7);
    expect(items[0].quality).to.equal(2);
  });

  test("Backstage passes to a TAFKAL80ETC concert 11 0", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(10);
    expect(items[0].quality).to.equal(1);
  });

  test("Backstage passes to a TAFKAL80ETC concert 8 49", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 8, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(7);
    expect(items[0].quality).to.equal(50);
  });

  test("Backstage passes to a TAFKAL80ETC concert 6 20", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(5);
    expect(items[0].quality).to.equal(22);
  });

  test("Backstage passes to a TAFKAL80ETC concert 5 20", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(4);
    expect(items[0].quality).to.equal(23);
  });

  test("Backstage passes to a TAFKAL80ETC concert 5 49", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(4);
    expect(items[0].quality).to.equal(50);
  });

  test("foo -1 1", () => {
    const gildedRose = new Shop([new Item("foo", -1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(0);
  });

  test("Aged Brie -1 1", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(3);
  });

  test("Backstage passes to a TAFKAL80ETC concert -1 1", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(0);
  });

  test("Sulfuras, Hand of Ragnaros -1 1", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(1);
  });

  test("foo 0 60", () => {
    const gildedRose = new Shop([new Item("foo", 0, 60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(58);
  });

  test("Aged Brie 0 20", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(22);
  });

  test("Backstage passes to a TAFKAL80ETC concert 0 20", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });

  test("Sulfuras, Hand of Ragnaros 0 20", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(20);
  });

  test("Aged Brie 1 40", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 1, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(41);
  });

  test("shop begins empty", () => {
    const gildedRose = new Shop();
    expect(gildedRose.items.length).to.equal(0);
    expect(gildedRose.items).to.be.empty;
  });

  test("Conjured 10 10", () => {
    const gildedRose = new Shop([new Item("Conjured", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(8);
  });

  test("Conjured 5 10", () => {
    const gildedRose = new Shop([new Item("Conjured", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(4);
    expect(items[0].quality).to.equal(8);
  });

  test("Conjured 0 10", () => {
    const gildedRose = new Shop([new Item("Conjured", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(6);
  });
  
});
