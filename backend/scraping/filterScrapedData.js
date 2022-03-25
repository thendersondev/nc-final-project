const fs = require("fs/promises");

async function filterScrapedData() {
  const game = JSON.parse(
    await fs.readFile(__dirname + "/scraped-data/gameScrape.json")
  );
  const game365 = JSON.parse(
    await fs.readFile(__dirname + "/scraped-data/game365Scrape.json")
  );
  const box = JSON.parse(
    await fs.readFile(__dirname + "/scraped-data/boxScrape.json")
  );

  const game365Set = new Set();
  const boxSet = new Set();

  // compare game with both box and game365
  const filteredGame = game.filter((gameEntry) => {
    let count = 0;
    game365.forEach((game365Entry) => {
      if (
        gameEntry.title === game365Entry.title &&
        gameEntry.platform === game365Entry.platform
      ) {
        count++;
        game365Set.add(game365Entry);
      }
    });

    box.forEach((boxEntry) => {
      if (
        gameEntry.title === boxEntry.title &&
        gameEntry.platform === boxEntry.platform
      ) {
        count++;
        boxSet.add(boxEntry);
      }
    });
    if (count > 0) return gameEntry;
  });

  // compare box with game365
  box.forEach((boxEntry) => {
    game365.forEach((game365Entry) => {
      if (
        boxEntry.title === game365Entry.title &&
        boxEntry.platform === game365Entry.platform
      ) {
        game365Set.add(game365Entry);
        boxSet.add(boxEntry);
      }
    });
  });

  // convert sets to arrays for re-writing scraped data jsons
  const filteredBox = [];

  boxSet.forEach((entry) => {
    let push = true;
    filteredBox.forEach((game) => {
      if (game.title === entry.title && game.platform === entry.platform)
        push = false;
    });
    if (push) filteredBox.push(entry);
  });

  const filteredGame365 = [];

  game365Set.forEach((entry) => {
    let push = true;
    filteredGame365.forEach((game) => {
      if (game.title === entry.title && game.platform === entry.platform)
        push = false;
    });
    if (push) filteredGame365.push(entry);
  });

  await fs.writeFile(
    __dirname + "/scraped-data/gameScrape.json",
    JSON.stringify(filteredGame)
  );
  await fs.writeFile(
    __dirname + "/scraped-data/game365Scrape.json",
    JSON.stringify(filteredGame365)
  );
  await fs.writeFile(
    __dirname + "/scraped-data/boxScrape.json",
    JSON.stringify(filteredBox)
  );
}

filterScrapedData();
