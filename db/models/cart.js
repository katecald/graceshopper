'use strict'

const {INTEGER} = require('sequelize')

module.exports = db => db.define('cart', {
  quantity: INTEGER
})