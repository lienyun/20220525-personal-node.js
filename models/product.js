const Sequelize = require('sequelize');

const database = require('../utils/database');

////////////////////////////////////////////////////////////

const Product = database.define('product', {
    id: { 
        type: Sequelize.INTEGER, // 資料的型別
        autoIncrement: true, // 資料是否會自動增加（一般用於 id）
        allowNull: false, // 是否接受 null 值
        primaryKey: true, // 是否為 Primary Key
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});

module.exports = Product;