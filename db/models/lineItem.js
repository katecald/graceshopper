'use strict'

const {INTEGER} = require('sequelize')

module.exports = db => db.define('line_item', {
  quantity: INTEGER
})