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
    FikjxdJedW3YBulsfDpm: { 
        "user": 'PotatoPie', 
        "reviews": {
            0: {
                "User": "MrAmazon247",
                "body": "A really good seller",
                "userUID": "3X5TN8euxtDnsaGoFvSY"
            } ,
            1: {
                "User": "MrAmazon247",
                "body": "Horrible Guy",
                "userUID": "3X5TN8euxtDnsaGoFvSY"
            } ,
        } 
    },
    I9YOgLc9NRl3f871sK5f: { 
        "user": 'PotatoPie', 
        "reviews": {
            0: {
                "User": "MrAmazon247",
                "body": "A really good seller",
                "userUID": "3X5TN8euxtDnsaGoFvSY"
            } ,
            1: {
                "User": "MrAmazon247",
                "body": "Horrible Guy",
                "userUID": "3X5TN8euxtDnsaGoFvSY"
            } ,
        } 
    },
    KVoXaLUNZ511ihffCTVB: { 
        "user": 'PotatoPie', 
        "reviews": {
            0: {
                "User": "MrAmazon247",
                "body": "A really good seller",
                "userUID": "3X5TN8euxtDnsaGoFvSY"
            } ,
            1: {
                "User": "MrAmazon247",
                "body": "Horrible Guy",
                "userUID": "3X5TN8euxtDnsaGoFvSY"
            } ,
        } 
    },
    }
}

function fetchUser (user) {
    if (user.length !== 20) return { "error": "Bad user ID" }
    return {
        [user]: { 
            "user": 'PotatoPie', 
            "reviews": {
                0: {
                    "User": "MrAmazon247",
                    "body": "A really good seller",
                    "userUID": "3X5TN8euxtDnsaGoFvSY"
                } ,
                1: {
                    "User": "MrAmazon247",
                    "body": "A really good seller",
                    "userUID": "3X5TN8euxtDnsaGoFvSY"
                } ,
            } 
        },
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
    const reviews = (!newUser.reviews ? null : newUser.reviews)
    if (!reviews) return { error: "Bad submission" };
    if (id.length !== 20) return { error: "No such user!" }
    const newData = {
      "user": "<unchanged>",
      "reviews": reviews ? {
            0: {
                "User": "MrAmazon247",
                "body": "A really good seller",
                "userUID": "3X5TN8euxtDnsaGoFvSY"
            } ,
            1: {
                "User": "MrAmazon247",
                "body": "A really good seller",
                "userUID": "3X5TN8euxtDnsaGoFvSY"
            } , 
            2 : reviews
          } : "<unchanged>"}
    ;
    console.log({ [id]: newData })
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
