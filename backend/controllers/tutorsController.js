const ApiError = require('../error/ApiError');
const {Tutor} = require('../models/models');
const crypto = require('crypto');

class TutorsControler {
    async add(req, res) {
        const { email, password } = req.body;

        const passwordHash = crypto.createHash('md5')
            .update('veryhardpassword' + password).digest('hex');

        const tutor = await Tutor.create({ email, password: passwordHash });
        return res.json(tutor);
    }
}

module.exports = new TutorsControler();
