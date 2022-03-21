const { default: axios } = require("axios");
const fs = require("fs/promises");
const cheerio = require("cheerio");

exports.game365Scraper = (urls) => {
  const games = [];

  urls.map((url) => {
    const platform = url.includes("xbox")
      ? "Xbox SeriesX"
      : url.includes("nintendo")
      ? "Nintendo Switch"
      : "PS5";

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
        fs.writeFile(
          `${__dirname}/scrapedData/game365Scrape.json`,
          JSON.stringify(games)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
