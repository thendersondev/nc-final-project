const { gameScraper } = require("./gameScraper");
const { game365Scraper } = require("./game365Scraper");
const { boxScraper } = require("./boxScraper.js");
const fs = require("fs/promises");

async function init() {
  try {
    await fs.access(__dirname + "/scraped-data");

    gameScraper([
      "xbox-series/?attributeName1=Platform&contentOnly=&inStockOnly=true&listerOnly=true&attributeValue1=4294941101&sortBy=MOST_POPULAR_DESC&pageSize=96",
      "nintendo-switch/nintendo-switch-games/?contentOnly=&inStockOnly=true&listerOnly=&sortBy=MOST_POPULAR_DESC&pageSize=96",
      "playstation-5/?contentOnly=&inStockOnly=true&listerOnly=&sortBy=MOST_POPULAR_DESC&pageSize=96",
    ]);
    game365Scraper([
      "xbox-series-x-games",
      "nintendo-switch-games",
      "ps5-games",
    ]);
    boxScraper(["xbox-games", "nintendo-switch-games", "ps5-games"]);
  } catch (err) {
    await fs.mkdir(__dirname + "/scraped-data");
    init();
  }
}

init();
