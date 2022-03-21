const { default: axios } = require("axios");
const fs = require("fs/promises");
const cheerio = require("cheerio");

exports.gameScraper = (urls) => {
  const games = {};

  urls.map((url, index) => {
    const platform =
      index === 0 ? "Xbox SeriesX" : index === 1 ? "Nitendo switch" : "PS5";

    const urlRoot = "https://www.game.co.uk/en/games/";

    axios
      .get(urlRoot + url)
      .then((html) => {
        const $ = cheerio.load(html.data);
        $(".product").each((i, e) => {
          const price = $(e).find(".value").text();
          if (price === "" || null || undefined) return;
          // early exit if no price to compare

          const title = $(e).find("h2").text();
          const url = $(e).find("a").attr("href");
          const imgUrl = $(e).find("img").attr("data-src").slice(2);

          if (games.hasOwnProperty(title)) {
            games[title].url.push(url);
            games[title].price.push(price);
            games[title].imgUrl.push(imgUrl);
            games[title].platform = {
              "Xbox SeriesX": index === 0,
              "Nitendo switch": index === 1,
              PS5: index === 2,
            };
          } else {
            games[title] = {
              url: [url],
              price: [price],
              imgUrl: [imgUrl],
              platform: {
                "Xbox SeriesX": index === 0,
                "Nitendo switch": index === 1,
                PS5: index === 2,
              },
            };
          }
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
