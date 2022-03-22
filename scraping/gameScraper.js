const { default: axios } = require("axios");
const fs = require("fs/promises");
const cheerio = require("cheerio");
const { resolve } = require("path");

exports.gameScraper = async (urls) => {
  const games = [];

  urls.map((url) => {
    const platform = url.includes("xbox")
      ? "Xbox SeriesX"
      : url.includes("nintendo")
      ? "Nintendo Switch"
      : "PS5";

    const urlRoot = "https://www.game.co.uk/en/games/";

    axios
      .get(urlRoot + url)
      .then((html) => {
        const $ = cheerio.load(html.data);
        $(".product").each((i, e) => {
          const price = $(e)
            .find(".value")
            .text()
            ?.split("£")[1]
            ?.split("\n")[0];
          if (price === "" || price === null || price === undefined) return;
          // early exit if no price to compare

          const title = $(e).find("h2").text();
          const url = $(e).find("a").attr("href");
          const imgUrl = "https:" + $(e).find("img").attr("data-src");

          games.push({
            title,
            imgUrl,
            price,
            url,
            platform,
          });
        });
        fs.writeFile(
          `${__dirname}/scraped-data/gameScrape.json`,
          JSON.stringify(games)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
