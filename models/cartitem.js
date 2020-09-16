'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CartItem.init({
    quantity: DataTypes.NUMBER,
    MealId: DataTypes.NUMBER,
    CartId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'CartItem',
  });
  return CartItem;
};