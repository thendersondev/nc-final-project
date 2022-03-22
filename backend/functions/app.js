function getApi(req,res,next) {
    res.status(200).send(apiDirect);
}

const apiDirect = {
    "GET /": {
        desc: "returns an object of all active endpoints",
    },
    "GET /items": {
        desc: "returns an 'items' object of all items from all stores, with prices for each listed including which is cheapest",
        example_return: {
            items: {
                game: {
                    title: "title",
                    platform: "platform",
                    price: {
                        shop1: "price",
                        shop2: "price",
                    },
                    bestPrice: "price",
                    bestStore: "store"
                } ,
                game: {
                    title: "title",
                    platform: "platform",
                    price: {
                        shop1: "price",
                        shop2: "price",
                    },
                    bestPrice: "price",
                    bestStore: "store"
                } ,
            }
        }
    } , 
    "GET /items/:shop_id": {
        desc: "returns an 'items' array of all items from a specific store",
        example_return: {
            items: [
                {
                    title: "title",
                    price: "price",
                    platform: "platform",
                    imgUrl: "imgUrl" ,
                    url: "url",
                } , {
                    title: "title",
                    price: "price",
                    platform: "platform",
                    imgUrl: "imgUrl" ,
                    url: "url",
                } , 
            ]
        }
    } , 
    "GET /users": {
        desc: "returns a 'users' object of all users",
        example_return: {
            users: {
            F1GpqYKgwuIIQinPq9Ou: { name: 'name', user: 'user' },
            GrvIL9weG5nQkEofIqjk: { name: 'name', user: 'user' },
            }
      },
    } , 
    "POST /users": {
        desc: "accepts a new user object, adds to the db and returns the new user",
        example_return: {
            user: {
                F1GpqYKgwuIIQinPq9Ou: { user: 'user', name: 'name' }
            }
      }, 
        example_submit: {
			user: "Any string",
			name: "Any string",
      }
    } , 
    "GET /users/:user": {
        desc: "returns an object of a single user",
        example_return: {
            user: {
                F1GpqYKgwuIIQinPq9Ou: { user: 'user', name: 'name' }
            }
      },
    } , 
    "PATCH /users/:user": {
        desc: "accepts a new user object, adds to the db and returns the new user",
        example_return: {
            user: {
                "CKUY57rrFUM508CWrBVE": {
                    user: "user",
                    name: "name"
                }
            }
        }, 
        example_submit: {
			user: "Any string",
      }
    } ,
    "DELETE /users/:user": {
        desc: "removes the specified user id from the db",
        example_return: {
            user: {
                removed: "F1GpqYKgwuIIQinPq9Ou"
            }
      },
    } ,
    "GET /trades": {
        desc: "returns a 'trades' object of all trades",
        example_return: {
            trades: {
                F1GpqYKgwuIIQinPq9Ou: { 
                    item: 'item', 
                    user: 'user',
                    location: "location",
                    price: "price",
                },
                GrvIL9weG5nQkEofIqjk: { 
                    item: 'item', 
                    user: 'user',
                    location: "location",
                    price: "price",
                },
            }
      },
    } , 
    "POST /trade": {
        desc: "accepts a new trade object, adds to the db and returns the new trade",
        example_return: {
            trade: {
                F1GpqYKgwuIIQinPq9Ou: { 
                    item: 'item', 
                    user: 'user',
                    location: "location",
                    price: "price",
                }
            }
      }, 
        example_submit: { 
            item: 'item', 
            user: 'user',
            location: "location",
            price: "price",
        }
    } , 
    "GET /trades/:trade_id": {
        desc: "returns an object of a single trade",
        example_return: {
            trade: {
                F1GpqYKgwuIIQinPq9Ou: { 
                    item: 'item', 
                    user: 'user',
                    location: "location",
                    price: "price",
                }
            }
      },
    } , 
    "PATCH /trades/:trade_id": {
        desc: "accepts a new trade object, adds to the db and returns the new trade",
        example_return: {
            trade: {
                F1GpqYKgwuIIQinPq9Ou: { 
                    item: 'item', 
                    user: 'user',
                    location: "location",
                    price: "price",
                }
            }
      }, 
        example_submit: {
			location: "Any string",
      }
    } ,
    "DELETE /trades/:trade_id": {
        desc: "removes the specified trade id from the db",
        example_return: {
            user: {
                removed: "F1GpqYKgwuIIQinPq9Ou"
            }
      },
    }
}

module.exports = getApi