const functions = require('firebase-functions');
const express = require('express');
const app = express();
const cors = require('cors')({origin: true});
const { getItems, getItemsByShop } = require('./controllers/controller_items')
const { getUsers, getUser, postUser, deleteUser, patchUser } = require('./controllers/controller_users')
const getApi = require('./app')

app.use(cors);

app.get('/', getApi);


app.get('/items/', getItems)
app.get('/items/:shop_no', getItemsByShop)

app.get('/users', getUsers)
app.post('/users', postUser)

app.get('/users/:user', getUser)
app.patch('/users/:user', patchUser)
app.delete('/users/:user', deleteUser)

// app.get('/trades', getTrades)
// app.post('/trades', postTrade)

// app.get('/trades/:trade_id', getTrade)
// app.patch('/trades/:trade_id', patchTrade)
// app.delete('/trades/:trade_id', deleteTrade)



app.use((err,req,res,next) => {
  if (err.status && err.msg) {
      res.status(err.status).send({ 'msg': err.msg });
  } else if (err.code !== 'undefined') {
      console.log(err)
      res.status(400).send({ 'msg': 'Bad Request' })
  } else {
      res.status(500).send({ 'msg': 'Internal Server Error' })
  }
})

exports.app = functions.https.onRequest(app);

  