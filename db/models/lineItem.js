'use strict'

const { INTEGER } = require('sequelize')

module.exports = db => db.define('line_item', {
  quantity: INTEGER
})

module.exports.associations = (LineItem, {Order}) => {
  LineItem.belongsTo(Order)
}
