'use strict';

const {Model, DataTypes} = require('sequelize');
const db = require('../database/db');
const User = require('./User');

class SideProject extends Model {
}
SideProject.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dueAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
}, {sequelize: db, modelName: 'SideProject'});

SideProject.belongsTo(User);
User.hasMany(SideProject);

module.exports = SideProject;
