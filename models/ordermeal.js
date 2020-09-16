'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderMeal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrderMeal.init({
    price: DataTypes.NUMBER,
    MealId: DataTypes.NUMBER,
    Reservation: DataTypes.NUMBER,
    quantity: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'OrderMeal',
  });
  return OrderMeal;
};