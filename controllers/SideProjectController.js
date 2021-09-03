'use strict';

const SideProject = require('../models/SideProject');

class SideProjectController {
    static async index(req, res) {
        const sideProjects = await SideProject.findAll();
        return res.json(sideProjects);
    }

    static async store(req, res) {
        $validated = $request.validate({
            // The name of your side project. Example: The SideProject API
            'name': 'string|max:80|required',
            // A longer description of your side project.
            'description': 'string|max:255',
            // A url to your side project.
            'url': 'string|url',
            // Due date for the side project.
            'due_at': ['date', 'date_format:Ymd', 'after:today'],
        });

        $validated['user_id'] = auth().id();

        return SideProject.create($validated);
    }

    static async show(req, res) {
        const sideProject = await SideProject.findByPk(1, {include: 'User'}); // Really should be req.params.id
        return res.json(sideProject);
    }

    static async update(req, res) {
        //
    }

    static async destroy(req, res) {
        //
    }

    static async finish(req, res) {
        //
    }
}

module.exports = SideProjectController;