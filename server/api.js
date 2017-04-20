'use strict'
const {Thing, Order, Cart} = require('APP/db')
const api = module.exports = require('express').Router()
const Promise = require('bluebird'); 

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/email', require('./email'))
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
  .get('/cart', (req, res, next) => {
    Promise.map(Object.keys(req.session.cart), thingId =>
      Thing.findById(thingId))
     .then(productsInCart => res.send(productsInCart))
     .catch(next)
  })
  .post('/cart', (req, res, next) => {
    if (req.session.cart) {
      Promise.all([Order.findById(req.session.cart.id), Thing.findById(req.body.productId)])
      .spread((order, thing) => {
        order.addThing(thing, {quantity: +req.body.quantity})
      })
      .then(() =>  {
        res.send(req.session.cart)
      })
    } else {
      Promise.all([Order.create(), Thing.findById(req.body.productId)])
      .spread((order, thing) => {
        order.addThing(thing, {quantity: 1})
        req.session.cart = {id: order.id}
      })
      .then(() =>  {
        res.send(req.session.cart)
    })
    }
  })

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
