'use strict'

const {STRING, INTEGER} = require('sequelize')

module.exports = db => db.define('orders')

module.exports.associations = (Order, {Thing, User}) => {
  Order.belongsToMany(Thing, {through: 'order_thing'})
  Order.belongsTo(User)
}
