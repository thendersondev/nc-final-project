const { default: axios } = require("axios");
const fs = require("fs/promises");
const cheerio = require("cheerio");

exports.gameScraper = (urls) => {
  const games = [];

  urls.map((url, index) => {
    const platform =
      index === 0 ? "Xbox SeriesX" : index === 1 ? "Nitendo switch" : "PS5";

    const urlRoot = "https://www.game.co.uk/en/games/";

    axios
      .get(urlRoot + url)
      .then((html) => {
        const $ = cheerio.load(html.data);
        $(".product").each((i, e) => {
          const price = $(e).find(".value").text()?.split("£")[1];
          if (price === "" || null || undefined) return;
          // early exit if no price to compare

          const title = $(e).find("h2").text();
          const url = $(e).find("a").attr("href");
          const imgUrl = $(e).find("img").attr("data-src").slice(2);

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
        fs.writeFile(`gameScrape.json`, JSON.stringify(games));
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
