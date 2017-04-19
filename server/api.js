'use strict'
const {Thing} = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .get('/products', (req, res, next) => {
    Thing.findAll({})
    .then(products => res.send(products))
    .catch(next)
  })
  .get('/products/:id', (req, res, next) => {
    Thing.findById(req.params.id)
    .then(product => res.send(product))
    .catch(next)
  })
  // Has a side effect, should be a .post request
  // Maybe POST /cart/:productId
  //   req.body = {quantity: 3}
  // OR req.body = {changeBy: -1}
  //
  .post('/addToCart', (req, res, next) => {
    console.log("PRODUCT ID", req.body.productId)
    req.session.cart = req.session.cart || {}
    req.session.cart[req.body.productId] = req.body.quantity || 1
    console.log("HERES THE CART", req.session.cart)
    // Thing.findById(req.body.productId)
    // // below will overwrite/ not handle multiples
    // .then(product => req.session.cart = {
    //   // Can't use Object spread inside backend code (yet) 😭
    //   // Emoji are ok.
    //   ...req.session.cart, {
    //     [req.body.productId]: (req.session.cart[productId] || 0) + 1
    //   }})
    // .then(() => res.send(req.session.cart))
    // .catch(next)
    res.send(req.session.cart)
  })

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
