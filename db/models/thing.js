'use strict'

const {STRING, INTEGER} = require('sequelize')

module.exports = db => db.define('things', {
  name: STRING,
  price: INTEGER,
  description: STRING,
  imageURL: STRING,
})

module.exports.associations = (Thing, {Order, LineItem}) => {
  Thing.belongsToMany(Order, {through: LineItem})
}
