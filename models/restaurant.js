'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Restaurant.init({
    name: DataTypes.STRING,
    CategoryId: DataTypes.NUMBER,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    image: DataTypes.STRING,
    opening_hours: DataTypes.STRING,
    price: DataTypes.STRING,
    maximum_seat: DataTypes.NUMBER,
    timetable_interval: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};