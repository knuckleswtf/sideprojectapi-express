'use strict';

const {Sequelize} = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: require('path').join(__dirname, 'database.sqlite')
});

module.exports = sequelize;