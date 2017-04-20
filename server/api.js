'use strict'
const {Thing, Order, Cart, LineItem} = require('APP/db')
const api = module.exports = require('express').Router()
const Promise = require('bluebird'); 

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



  .get('/cart', (req, res, next) => {
    LineItem.findAll({ where: { order_id: req.session.cart.id } })
      .then(lineitems => Promise.map(lineitems, lineitem =>
        Thing.findById(lineitem.thing_id, { include: [{all: true}] })
      ))
      // QUANTITY UPDATING NOT WORKING FOR DEFAULT (1)... SEE HANDLE CHANGE??
      .then(products => {
        // let PandQ = products.map((product, idx) => [product, products[0].orders[idx].line_item]);
        // console.log('pandq', PandQ);
        res.send(products)
      })
      .catch(next)
  })



  .post('/cart', (req, res, next) => {
    if (req.session.cart) {
      console.log('api/cart: existing order', req.session.cart)
      Promise.all([Order.findById(req.session.cart.id), Thing.findById(req.body.productId)])
      .spread((order, thing) => {
        order.addThing(thing, {quantity: +req.body.quantity})
      })
      .then(() =>  {
        res.send(req.session.cart)
      })
    } else {
      console.log('api/cart: creating new order', req.session.cart)
      Promise.all([Order.create(), Thing.findById(req.body.productId)])
      .spread((order, thing) => {
        order.addThing(thing, {quantity: req.body.quantity})
        req.session.cart = {id: order.id}
      })
      .then(() =>  {
        res.send(req.session.cart)
    })
    }
  })

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
