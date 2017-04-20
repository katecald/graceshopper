'use strict'
const {Thing, Order} = require('APP/db')
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
  //Quantity is not yet functional. But with this route, someone can add product ids to their cart. 
  .post('/addToCart', (req, res, next) => {
    console.log(req.session.cart)
    if (req.session.cart) {
      Promise.all([Order.findById(req.session.cart.id), Thing.findById(req.body.productId)])
      .spread((order, thing) => {
        order.addThing(thing, {through: {quantity: 1}})
      })
      .then(order => req.session.cart = order)
    } else {
      Promise.all([Order.create(), Thing.findById(req.body.productId)])
      .spread((order, thing) => {
        order.addThing(thing, {through: {quantity: 1}})
      })
      .then(order => req.session.cart = order)
    }
    res.send(req.session.cart)
  })

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
