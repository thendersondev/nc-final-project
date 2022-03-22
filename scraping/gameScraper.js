const { default: axios } = require("axios");
const fs = require("fs/promises");
const cheerio = require("cheerio");

exports.gameScraper = (urls) => {
  const games = [];

  urls.forEach((url) => {
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
          let price = $(e).find(".value").text();
          if (price === "" || price === null || price === undefined) return;
          // early exit if no price to compare
          if (price.includes(",")) price = price.replace(",", "");

          price = price.split("£")[1].split("\n")[0];

          let title = $(e).find("h2").text();

          // remove any non-alphanumeric/non-whitespace characters
          const titleCheck = [...title.matchAll(/[^a-zA-Z\d\s]/g)];

          for (let i = 0; i < titleCheck.length; i++) {
            if (titleCheck[i][0] === "é") {
              title = title.replace(titleCheck[i][0], "e");
            } else {
              title = title.replace(titleCheck[i][0], "");
            }
            if (i === titleCheck.length - 1) {
              title = title.replace("  ", " ");
              if (title.endsWith(" ")) title = title.slice(0, title.length - 1);
            }
          }

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
