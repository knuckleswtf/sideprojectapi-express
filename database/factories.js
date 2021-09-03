'use strict';

const faker = require('faker');

const SideProject = () => {
    return {
        name: faker.name.title(),
        description: faker.lorem.sentence(),
        dueAt: faker.date.soon(),
        UserId: 1,
    };
};

const User = () => {
    return {
        name: faker.name.findName(),
        email: faker.internet.email(),
        emailVerifiedAt: Date.now(),
        password: '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    };
};

module.exports = {
    SideProject,
    User
};