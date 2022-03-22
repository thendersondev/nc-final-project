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
          const price = $(e).find(".price").text()?.split("£")[1];
          if (price === "" || price === null || price === undefined) return;
          // early exit if no price to compare

          const unfixedTitle = $(e).find("a").text().split(" ");

          let title = [];

          for (let i = 0; i < unfixedTitle.length; i++) {
            if (i === 0) {
              title.push(unfixedTitle[i]);
            } else if (
              unfixedTitle[i].toLowerCase() === "xbox" ||
              unfixedTitle[i].toLowerCase() === "ps5" ||
              unfixedTitle[i].toLowerCase() === "nintendo"
            ) {
              break;
            } else {
              title.push(unfixedTitle[i]);
            }
          }

          title = title.join(" ");
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
          `${__dirname}/scraped-data/game365Scrape.json`,
          JSON.stringify(games)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
