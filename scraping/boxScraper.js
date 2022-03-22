const { default: axios } = require("axios");
const fs = require("fs/promises");
const cheerio = require("cheerio");

exports.boxScraper = async (urls) => {
  const games = [];

  urls.map((url) => {
    const platform = url.includes("xbox")
      ? "Xbox SeriesX"
      : url.includes("nintendo")
      ? "Nintendo Switch"
      : "PS5";

    const urlRoot = "https://www.box.co.uk/";

    axios
      .get(urlRoot + url)
      .then((html) => {
        const $ = cheerio.load(html.data);
        $(".p-list").each((i, e) => {
          let price = $(e)
            .find(".pq-price")
            .text()
            ?.split("£")[1]
            ?.split("\n")[0];
          if (price === "" || price === null || price === undefined) return;
          // early exit if no price to compare
          if (price.includes(",")) price = price.replace(",", "");

          let unfixedTitle = $(e).find("h3").text().split(" ");

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
          const imgUrl =
            urlRoot + $(e).find(".p-list-image").find("img").attr("data-src");

          games.push({
            title,
            imgUrl,
            price,
            url,
            platform,
          });
        });
        fs.writeFile(
          `${__dirname}/scraped-data/boxScrape.json`,
          JSON.stringify(games)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
