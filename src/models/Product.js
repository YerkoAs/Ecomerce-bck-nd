const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Product = sequelize.define('product', {
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //categoryId
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    images: {
        type: DataTypes.JSON,
        allowNull: false
    }
});

module.exports = Product;