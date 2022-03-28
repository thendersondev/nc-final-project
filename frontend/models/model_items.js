const { db } = require("../firebase");
const {
  collectionGroup,
  doc,
  collection,
  getDocs,
  getDoc,
  query,
  where,
} = require("firebase/firestore");

const docRef = doc(db, "users", "t1sKcLakK5MncSizlxEv");
const allColl = collectionGroup(db, "items");

const shopRef = {
  1: "game365",
  2: "box",
  3: "game",
};

async function fetchItemsByShop(shop_id, q) {
  const queryArgs = [collection(db, `items/shops/${shopRef[shop_id]}`)];
  if (q) {
    queryArgs.push(where("item.platform", "==", q));
  }

  const collRef = query(...queryArgs);
  const readValues = [];

  const querySnapshot = await getDocs(collRef);
  querySnapshot.forEach((doc) => {
    readValues.push(doc.data());
  });
  return readValues;
}

async function fetchItems(query) {
  const gamesList = [];

  const returnOne = await fetchItemsByShop(1, query);
  const returnTwo = await fetchItemsByShop(2, query);
  const returnThr = await fetchItemsByShop(3, query);
  const itemList = {
    1: returnOne,
    2: returnTwo,
    3: returnThr,
  };

  for (const list in itemList) {
    for (const game in itemList[list]) {
      const gameEntry = itemList[list][game].item;
      if (!gamesList[gameEntry.title]) {
        gamesList[gameEntry.title] = {
          title: gameEntry.title,
          platform: gameEntry.platform,
          imgUrl: gameEntry.imgUrl,
          url: { [shopRef[list]]: gameEntry.url },
          price: {
            [shopRef[list]]: gameEntry.price,
          },
        };
      } else {
        gamesList[gameEntry.title].price[shopRef[list]] = gameEntry.price;
        gamesList[gameEntry.title].url[shopRef[list]] = gameEntry.url;
      }
    }
  }

  for (const game in gamesList) {
    const priceArray = [
      gamesList[game].price.box,
      gamesList[game].price.game,
      gamesList[game].price.game365,
    ];
    let bestPrice = Number.POSITIVE_INFINITY;
    let bestStore = "";
    let worstPrice = [...priceArray].sort((a, b) => {
      return b - a;
    });

    priceArray.forEach((price, ind) => {
      if (+price < bestPrice) {
        bestPrice = price;
        bestStore = ind === 0 ? "box" : ind === 1 ? "game" : "game365";
      }
    });

    gamesList[game].bestStore = bestStore;
    gamesList[game].bestPrice = bestPrice;
    gamesList[game].worstPrice = worstPrice[0];
  }

  return gamesList;
}

module.exports = {
  fetchItems,
  fetchItemsByShop,
};
