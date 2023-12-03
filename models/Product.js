'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
        Product.belongsTo(models.Category, { foreignKey: 'CategoryId' });
    }
  }

  Product.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            message: "Field title tidak boleh kosong",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            message: "Field price tidak boleh kosong",
          },
          isInt: {
            args: true,
            message: "Field price harus bertipe data integer atau number",
          },
          min: {
            args: [0],
            message: "Field price tidak boleh kurang dari 0",
          },
          max: {
            args: [50000000],
            message: "Field price tidak boleh melebihi 50000000",
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            message: "Field stock tidak boleh kosong",
          },
          isInt: {
            args: true,
            message: "Field stock harus bertipe data integer atau number",
          },
          min: {
            args: [5],
            message: "Field stock tidak boleh kurang dari 5",
          },
        },
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );

  return Product;
};
