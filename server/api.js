'use strict'
const {Thing} = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))

api.get('/products', (req, res, next) => {
  Thing.findAll({})
    .then(products => res.send(products))
    .catch(next)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
