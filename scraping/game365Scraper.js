const { default: axios } = require("axios");
const fs = require("fs/promises");
const cheerio = require("cheerio");

exports.game365Scraper = (urls) => {
  const games = [];

  urls.map((url, index) => {
    const platform =
      index === 0 ? "Xbox SeriesX" : index === 1 ? "Nintendo switch" : "PS5";

    const urlRoot = "https://www.365games.co.uk/";

    axios
      .get(urlRoot + url)
      .then((html) => {
        const $ = cheerio.load(html.data);
        $(".product_box").each((i, e) => {
          const price = $(e).find(".price").text();
          if (price === "" || null || undefined) return;
          // early exit if no price to compare

          const title = $(e).find("a").text();
          const url = $(e).find("a").attr("href");
          const imgUrl = $(e).find("img").attr("data-src");

          games.push({
            title,
            imgUrl,
            price,
            url,
            platform,
          });
        });
      })
      .then(() => {
        fs.writeFile(`game365Scrape.json`, JSON.stringify(games));
        return fs.readFile;
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
