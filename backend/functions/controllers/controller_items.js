const {
    fetchItems,
    fetchItemsByShop,
 } = require("../models/model_items")

function getItemsByShop(req,res,next) {
    fetchItemsByShop(req.params.shop_no).then((data)=>{
        res.status(200).send({'items': data })
    })
    .catch(next)
}

function getItems(req,res,next) {
    fetchItems().then((data)=>{
        res.status(200).send({'items': data })
    })
    .catch(next)
}

module.exports = {
    getItems,
    getItemsByShop,
}