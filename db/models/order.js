'use strict'
const {STRING, INTEGER} = require('sequelize')

module.exports = db => db.define('orders')

module.exports.associations = (Order, {Thing, User, Cart}) => {
  Order.belongsToMany(Thing, {through: Cart})
  Order.belongsTo(User)
}
