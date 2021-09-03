'use strict';

const db = require('./db');

const models = require('fs').readdirSync(require('path').join(__dirname, '..', 'models'));
models.map(file => require(`../models/${file}`));

(async () => {
    await db.drop();
    await db.sync();

    const factories = require('./factories');

    await require(`../models/User`).create(factories.User());
    await require(`../models/SideProject`).create(factories.SideProject());
})();