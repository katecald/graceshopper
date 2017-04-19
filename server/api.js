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
  //Quantity is not yet functional. But with this route, someone can add product ids to their cart. 
  .post('/addToCart', (req, res, next) => {
    req.session.cart = req.session.cart || {}
    req.session.cart[req.body.productId] = req.body.quantity || 1
    res.send(req.session.cart)
  })

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
