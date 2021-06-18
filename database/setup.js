'use strict';

const db = require('./db');

const models = require('fs').readdirSync(require('path').join(__dirname, '..', 'models'));
models.forEach(file => require(`../models/${file}`));

db.sync();