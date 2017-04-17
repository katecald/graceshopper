'use strict'

const {STRING, INTEGER} = require('sequelize')

module.exports = db => db.define('things', {
  name: STRING,
  price: INTEGER,
  description: STRING,
  imageURL: STRING,
})

module.exports.associations = (Thing, {User, Favorite}) => {
  Thing.belongsToMany(User, {as: 'lovers', through: Favorite})
}
