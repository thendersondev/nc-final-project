function fetchItems () {
    return {
        game1: {
            title: "title",
            platform: "platform",
            price: {
                game: "7.99",
                365: "16.99",
                box: "183.81",
            },
            bestPrice: "7.99",
            bestStore: "game",
            imgUrl: "Image.url.jpg"
        },
        game2: {
            title: "title",
            platform: "platform",
            price: {
                game: "7.99",
                365: "16.99",
                box: "183.81",
            },
            bestPrice: "7.99",
            bestStore: "game",
            imgUrl: "Image.url.jpg"
        },
        game3: {
            title: "title",
            platform: "platform",
            price: {
                game: "7.99",
                365: "16.99",
                box: "183.81",
            },
            bestPrice: "7.99",
            bestStore: "game",
            imgUrl: "Image.url.jpg"
        },
        game4: {
            title: "title",
            platform: "platform",
            price: {
                game: "7.99",
                365: "16.99",
                box: "183.81",
            },
            bestPrice: "7.99",
            bestStore: "game",
            imgUrl: "Image.url.jpg"
        },
        game5: {
            title: "title",
            platform: "platform",
            price: {
                game: "7.99",
                365: "16.99",
                box: "183.81",
            },
            bestPrice: "7.99",
            bestStore: "game",
            imgUrl: "Image.url.jpg"
        },
        game6: {
            title: "title",
            platform: "platform",
            price: {
                game: "7.99",
                365: "16.99",
                box: "183.81",
            },
            bestPrice: "7.99",
            bestStore: "game",
            imgUrl: "Image.url.jpg"
        },
    }
}

function fetchItemsByShop (store) {
    return {
        [store]:[ {
            title: "title",
            platform: "platform",
            price: "7.99",
            imgUrl: "Image.url.jpg",
            url: "www.whattimeisitrightnow.com"
        },{
            title: "title",
            platform: "platform",
            price: "7.99",
            imgUrl: "Image.url.jpg",
            url: "www.whattimeisitrightnow.com"
        },{
            title: "title",
            platform: "platform",
            price: "7.99",
            imgUrl: "Image.url.jpg",
            url: "www.whattimeisitrightnow.com"
        },{
            title: "title",
            platform: "platform",
            price: "7.99",
            imgUrl: "Image.url.jpg",
            url: "www.whattimeisitrightnow.com"
        },{
            title: "title",
            platform: "platform",
            price: "7.99",
            imgUrl: "Image.url.jpg",
            url: "www.whattimeisitrightnow.com"
        } ]
    }
}

function fetchUsers () {
    return {
    FikjxdJedW3YBulsfDpm: { "user": 'PotatoPie', "name": 'Mystery' },
    I9YOgLc9NRl3f871sK5f: { "user": 'PotatoPie', "name": 'Mystery' },
    KVoXaLUNZ511ihffCTVB: { "user": 'PotatoPie', "name": 'Mystery' },
    }
}

function fetchUser (user) {
    if (user.length !== 20) return { "error": "Bad user ID" }
    return {
        [user]: { "user": 'PotatoPie', "name": 'Mystery' },
    }
}

function addUser (newUser) {
    const {name, user} = newUser
    if (!name || !user) return { "error": "Bad submission" };
    return { 
        FikjxdJedW3YBulsfDpm: { "user": user, "name": name } 
    };
}

function changeUser (id, newUser) {
    const name = (!newUser.name ? null : newUser.name)
    const user = (!newUser.user ? null : newUser.user)
    if (!name && !user) return { error: "Bad submission" };
    if (id.length !== 20) return { error: "No such user!" }
    const newData = {
      "user": user ? user : "<unchanged>",
      "name": name ? name : "<unchanged>"
    };
    return { [id]: newData };

}

function removeUser (user) {
    if (user.length !== 20) return { "error": "Bad user ID" }
    return { "removed": user };
}

function fetchTrades () {
    return {
        FikjxdJedW3YBulsfDpm: { "user": 'user', "item": 'item', "location": 'location', "price": 'price' },
        I9YOgLc9NRl3f871sK5f: { "user": 'user', "item": 'item', "location": 'location', "price": 'price' },
        KVoXaLUNZ511ihffCTVB: { "user": 'user', "item": 'item', "location": 'location', "price": 'price' },
    }
}

function fetchTrade (trade) {
    if (trade.length !== 20) return { "error": "Bad trade ID" }
    return {
        [trade]: { "user": 'user', "item": 'item', "location": 'location', "price": 'price' },
    }
}

function addTrade (newTrade) {
    const {user, item, location, price} = newTrade
    if (!item || !user || !location || !price) return { error: "Bad submission" };
    return { 
        FikjxdJedW3YBulsfDpm: { "user": user, "item": item, "location": location, "price": price } 
    };
}

function changeTrade (id, newTrade) {
    const item = (!newTrade.item ? null : newTrade.item)
    const user = (!newTrade.user ? null : newTrade.user)
    const price = (!newTrade.price ? null : newTrade.price)
    const location = (!newTrade.location ? null : newTrade.location)
    if (!user && !item && !price && !location) return { error: "Bad submission" };
    if (id.length !== 20) return { error: "No such trade!" }
    const newData = {
        user: user ? user : "<unchanged>",
        item: item ? item : "<unchanged>",
        location: location ? location : "<unchanged>",
        price: price ? price : "<unchanged>",
    };
    return { [id]: newData };

}

function removeTrade (trade) {
    if (trade.length !== 20) return { "error": "Bad trade ID" }
    return { "removed": trade };
}

module.exports = {
    fetchItems,
    fetchItemsByShop,
    fetchUsers,
    fetchUser,
    addUser,
    changeUser,
    removeUser,
    fetchTrades,
    fetchTrade,
    addTrade,
    changeTrade,
    removeTrade,
  };
