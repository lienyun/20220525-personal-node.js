const Sequelize = require('sequelize');

////////////////////////////////////////////////////////////

// database 是 Sequelize class 的實例(實體, instance) 
const database = new Sequelize('vue-node-personal', 'root', '403200281', {
    dialect: 'mysql', 
    host: 'localhost'
});


module.exports = database;