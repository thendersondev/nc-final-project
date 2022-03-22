const {
    fetchTrades,
    fetchTrade,
    addTrade,
    changeTrade,
    removeTrade
 } = require("../models/model_trades")

 function getTrades(req,res,next) {
    fetchTrades().then((data)=>{
        res.status(200).send({'trades': data})
    })
    .catch(next)
}

function postTrade(req,res,next) {
    const { user, item, price, location } = req.body
    addTrade(user,item,location,price).then((data)=>{
        res.status(201).send({'trade': data})
    })
    .catch(next)
}

function getTrade(req,res,next) {
    fetchTrade(req.params.trade_id).then((data)=>{
        res.status(200).send({'trade': data})
    })
    .catch(next)
}

function patchTrade(req,res,next) {
    const { user, item, price, location } = req.body
    changeTrade(req.params.trade_id, user, item, price, location).then((data)=>{
        res.status(200).send({'trade': data})
    })
    .catch(next)
}

function deleteTrade(req,res,next) {
    removeTrade(req.params.trade_id).then((data)=>{
        res.status(200).send({'trade': data})
    })
    .catch(next)
}

module.exports = {
    getTrades,
    postTrade,
    getTrade,
    patchTrade,
    deleteTrade
}