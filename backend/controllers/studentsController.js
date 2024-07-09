const ApiError = require('../error/ApiError');
const {Student} = require('../models/models');
const crypto = require('crypto');

class StudentsControler {
    async add(req, res) {
        const { email, password } = req.body;

        const passwordHash = crypto.createHash('md5')
            .update('veryhardpassword' + password).digest('hex');

        const student = await Student.create({ email, password: passwordHash });
        return res.json(student);
    }

    async getAll(req, res) {
        const students = await Student.findAll();
        return res.json(students);
    }
}

module.exports = new StudentsControler();
