const ApiError = require('../error/ApiError');
const {Subject} = require('../models/models');

class SubjectsControler {
    async list(req, res) {
        res.json('{message: "sss"}');
    }

    async add(req, res) {
        const {name, color, tutorId} = req.body;
        const subject = await Subject.create({name, color, tutorId});
        return res.json(subject);
    }

    async getOne(req, res) {
        const query = req.query;
    }

    async getAll(req, res) {
        const subjects = await Subject.findAll();
        return res.json(subjects);
    }


    async check(req, res, next) {
        const { id } = req.query;

        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }

        res.json(id);
    }
}

module.exports = new SubjectsControler();
