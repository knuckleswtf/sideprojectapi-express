'use strict';

const User = require('../models/User');

class UserController {
    static async index(req, res) {
        return res.json({data: await User.findAll()});
    }

    static async store(req, res) {
        // Doesn't work, btw
        let user = User.create(req.validated());
        let token = user.createToken('default');
        return {user: user, token: token.plainTextToken};
    }

    static async authenticate(req, res) {
        // Also doesn't work
        let token = User.findByPk(1).createToken('default');
        return {token: token.plainTextToken};
    }

    static async show(req, res) {
        return res.json({dara: await User.findByPk(1, {include: 'SideProjects'})}); // should be req.params.id
    }
}

module.exports = UserController;