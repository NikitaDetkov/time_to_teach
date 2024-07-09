const Router = require('express');
const router = new Router();
const studentsControler = require('../controllers/studentsController');

router.post('/add', studentsControler.add);
router.get('/list', studentsControler.getAll);

module.exports = router;
