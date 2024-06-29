const ApiError = require('../error/ApiError');
const {Lesson} = require('../models/models');

class LessonsControler {
    async list(req, res) {
        res.json('{message: "sss"}');
    }

    async add(req, res) {
        const { subjectId, tutorId, studentId, price, date } = req.body;
        const lesson = await Lesson.create({ subjectId, tutorId, studentId, price, date });
        return res.json(lesson);
    }

    async getOne(req, res) {
        const query = req.query;
    }

    async getAll(req, res) {
        const lessons = await Lesson.findAll();
        return res.json(lessons);
    }


    async check(req, res, next) {
        const { id } = req.query;

        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }

        res.json(id);
    }
}

module.exports = new LessonsControler();
