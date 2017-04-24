'use strict'
const { Thing, Order, Cart, LineItem } = require('APP/db')
const api = module.exports = require('express').Router()
const Promise = require('bluebird')

api
  .get('/heartbeat', (req, res) => res.send({ ok: true }))
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
    Order.findAll({ where: { id: req.session.cart.id }, include: [Thing, LineItem] })
      .then(lineitems => {
        const toSend = lineitems[0].things.map((thing, i) => {
          thing.dataValues.quantity = lineitems[0].line_items[i].quantity
          return thing
        })
        res.send(toSend)
      })
      .catch(next)
  })

  .post('/cart', (req, res, next) => {
    if (req.session.cart) {
      Promise.all([Order.findById(req.session.cart.id), Thing.findById(req.body.productId)])
        .spread((order, thing) => {
          order.addThing(thing, { quantity: +req.body.quantity })
        })
        .then(() => {
          res.send(req.session.cart)
        })
        .catch(next)
    } else {
      Promise.all([Order.create(), Thing.findById(req.body.productId)])
        .spread((order, thing) => {
          order.addThing(thing, { quantity: +req.body.quantity })
          req.session.cart = { id: order.id }
        })
        .then(() => {
          res.send(req.session.cart)
        })
        .catch(next)
    }
  })
  .put('/cart', (req, res, next) => {
    const orderId = +req.session.cart.id
    const thingId = +req.body.productId
    Promise.all([
      LineItem.findOne({
        where: {
          thing_id: thingId,
          order_id: orderId
        }
      }),
      Order.findById(orderId)
    ])
      .spread((item, order) => {
        Promise.all([
          order.removeThing(thingId),
          item.destroy()
        ])
      })
      .then(res.sendStatus(204))
      .catch(next)
  })


// No routes matched? 404.
api.use((req, res) => res.status(404).end())
