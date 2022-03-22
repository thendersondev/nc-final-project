const assert = require("chai").assert;
const expect = require("chai").expect;
const fs = require("fs/promises");

describe("gameScraper data uniformity testing", () => {
  it("writes a json file as an array of objects", async () => {
    const file = JSON.parse(
      await fs.readFile(`${__dirname}/../scraped-data/gameScrape.json`)
    );

    assert.typeOf(file, "array");
    file.forEach((entry) => {
      assert.typeOf(entry, "object");
    });
  });
  it("each object in the array has keys of title, imgUrl, url, price, platform", async () => {
    const file = JSON.parse(
      await fs.readFile(`${__dirname}/../scraped-data/gameScrape.json`)
    );

    file.forEach((entry) => {
      assert.property(entry, "title");
      assert.property(entry, "url");
      assert.property(entry, "imgUrl");
      assert.property(entry, "price");
      assert.property(entry, "platform");
    });
  });
  it("each platform key only has values of PS5, Xbox seriesX, or Nintendo Switch", async () => {
    const file = JSON.parse(
      await fs.readFile(`${__dirname}/../scraped-data/gameScrape.json`)
    );

    file.forEach((entry) => {
      expect(["PS5", "Xbox SeriesX", "Nintendo Switch"]).to.include(
        entry.platform
      );
    });
  });
  it("each price key is a valid number", async () => {
    const file = JSON.parse(
      await fs.readFile(`${__dirname}/../scraped-data/gameScrape.json`)
    );

    file.forEach((entry) => {
      assert.isNotNaN(+entry.price);
      assert(entry.price !== null);
      assert(entry.price !== undefined);
      assert(entry.price !== "");
    });
  });
  it("each url / imgUrl is a valid url", async () => {
    const file = JSON.parse(
      await fs.readFile(`${__dirname}/../scraped-data/gameScrape.json`)
    );

    file.forEach((entry) => {
      assert(entry.url.startsWith("https://"));
      assert(entry.imgUrl.startsWith("https://"));
    });
  });
  it("", async () => {
    const file = JSON.parse(
      await fs.readFile(`${__dirname}/../scraped-data/gameScrape.json`)
    );
  });
});
describe("game365Scraper data uniformity testing", () => {
  it("writes a json file as an array of objects", async () => {
    const file = JSON.parse(
      await fs.readFile(`${__dirname}/../scraped-data/game365Scrape.json`)
    );

    assert.typeOf(file, "array");
    file.forEach((entry) => {
      assert.typeOf(entry, "object");
    });
  });
  it("each object in the array has keys of title, imgUrl, url, price, platform", async () => {
    const file = JSON.parse(
      await fs.readFile(`${__dirname}/../scraped-data/game365Scrape.json`)
    );

    file.forEach((entry) => {
      assert.property(entry, "title");
      assert.property(entry, "url");
      assert.property(entry, "imgUrl");
      assert.property(entry, "price");
      assert.property(entry, "platform");
    });
  });
  it("each platform key only has values of PS5, Xbox seriesX, or Nintendo Switch", async () => {
    const file = JSON.parse(
      await fs.readFile(`${__dirname}/../scraped-data/game365Scrape.json`)
    );

    file.forEach((entry) => {
      expect(["PS5", "Xbox SeriesX", "Nintendo Switch"]).to.include(
        entry.platform
      );
    });
  });
  it("each price key is a valid number", async () => {
    const file = JSON.parse(
      await fs.readFile(`${__dirname}/../scraped-data/game365Scrape.json`)
    );

    file.forEach((entry) => {
      assert.isNotNaN(+entry.price);
      assert(entry.price !== null);
      assert(entry.price !== undefined);
      assert(entry.price !== "");
    });
  });
  it("each url / imgUrl is a valid url", async () => {
    const file = JSON.parse(
      await fs.readFile(`${__dirname}/../scraped-data/game365Scrape.json`)
    );

    file.forEach((entry) => {
      assert(entry.url.startsWith("https://"));
      assert(entry.imgUrl.startsWith("https://"));
    });
  });
  it("each title should not include platform", async () => {
    const file = JSON.parse(
      await fs.readFile(`${__dirname}/../scraped-data/game365Scrape.json`)
    );

    file.forEach((entry) => {
      assert.isFalse(entry.title.includes("Xbox"));
      assert.isFalse(entry.title.includes("Nintendo Switch"));
      assert.isFalse(entry.title.includes("PS5"));
    });
  });
});
