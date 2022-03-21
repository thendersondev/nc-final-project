const scraper = require("./scrapers");

scraper.gameScraper([
  "xbox-series/?attributeName1=Platform&contentOnly=&inStockOnly=true&listerOnly=true&attributeValue1=4294941101&sortBy=MOST_POPULAR_DESC&pageSize=96",
  "nintendo-switch/nintendo-switch-games/?contentOnly=&inStockOnly=true&listerOnly=&sortBy=MOST_POPULAR_DESC&pageSize=96",
  "playstation-5/?contentOnly=&inStockOnly=true&listerOnly=&sortBy=MOST_POPULAR_DESC&pageSize=96",
]);
