'use strict';

const {Model, DataTypes} = require('sequelize');
const db = require('../database/db');
const SideProject = require('./SideProject');

class User extends Model {}
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    emailVerifiedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {sequelize: db, modelName: 'User'});

module.exports = User;