const assert = require("chai").assert;
const fs = require("fs/promises");
const { gameScraper } = require("../gameScraper");
const { game365Scraper } = require("../game365Scraper");

describe("gameScraper", () => {
  it("writes a json file as an array of objects", async () => {
    const file = JSON.parse(
      await fs.readFile(`${__dirname}/../../gameScrape.json`)
    );

    assert.typeOf(file, "array");
  });
});
