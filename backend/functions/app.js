function getApi(req,res,next) {
    res.status(200).send(apiDirect);
}

const apiDirect = {
    "GET /": {
        desc: "returns an object of all active endpoints",
    },
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
    }
}

module.exports = getApi