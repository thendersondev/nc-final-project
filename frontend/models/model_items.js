const { db } = require("../firebase");
const {
  collectionGroup,
  doc,
  collection,
  getDocs,
  getDoc,
} = require("firebase/firestore");

const docRef = doc(db, "users", "t1sKcLakK5MncSizlxEv");
const allColl = collectionGroup(db, "items");

const shopRef = {
  1: "365",
  2: "box",

  3: "game",
};

async function fetchItemsByShop(shop_id) {
  const collRef = collection(db, `items/shops/${shopRef[shop_id]}`);
  const readValues = [];
  const querySnapshot = await getDocs(collRef);
  querySnapshot.forEach((doc) => {
      readValues.push(doc.data());
      });
 
  return readValues;
}

async function fetchItems() {
  const gamesList = [];

  const returnOne = await fetchItemsByShop(1);
  const returnTwo = await fetchItemsByShop(2);
  const returnThr = await fetchItemsByShop(3);
  const itemList = {
    1: returnOne,
    2: returnTwo,
    3: returnThr,
  };
  for (const list in itemList) {
    shopRef[list];
    for (const game in itemList[list]) {
      const gameEntry = itemList[list][game].item;
      if (!gamesList[gameEntry.title]) {
        gamesList[gameEntry.title] = {
          title: gameEntry.title,
          platform: gameEntry.platform,
          price: {
            [shopRef[list]]: gameEntry.price,
          },
        };
      } else {
        gamesList[gameEntry.title].price[shopRef[list]] = gameEntry.price;
      }
    }
  }
  for (const game in gamesList) {
    const priceArray = [];
    if (!gamesList[game].price.box) gamesList[game].price.box = "199.99";
    if (!gamesList[game].price.game) gamesList[game].price.game = "199.99";
    if (!gamesList[game].price[365]) gamesList[game].price[365] = "199.99";
    gamesList[game].bestPrice = Number.POSITIVE_INFINITY;
    for (const pricing in gamesList[game].price) {
      if (gamesList[game].price[pricing] <= gamesList[game].bestPrice) {
        gamesList[game].bestStore = pricing;
        gamesList[game].bestPrice = gamesList[game].price[pricing];
      } else continue;
    }
  }
  return gamesList;
}

fetchItems().then((data) => console.log(data));

async function fetchItemsQuery() {}

module.exports = {
  fetchItems,
  fetchItemsByShop,
};