'use strict'
const {STRING, INTEGER} = require('sequelize')

module.exports = db => db.define('orders')

module.exports.associations = (Order, {Thing, User, LineItem}) => {
  Order.belongsToMany(Thing, { through: LineItem })
  Order.belongsTo(User)
  Order.hasMany(LineItem)
}
