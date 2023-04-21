const db = require('../db/config')
const { Sequelize, DataTypes, Model } = require('sequelize')

class Venue extends Model {}

Venue.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  { sequelize: db }
)

module.exports = Venue
