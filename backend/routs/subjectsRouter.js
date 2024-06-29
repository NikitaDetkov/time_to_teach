const Router = require('express');
const router = new Router();
const subjectsControler = require('../controllers/subjectsController');

router.get('/', (req, res) => res.json('sd'));
router.get('/list', subjectsControler.getAll);
router.get('/check', subjectsControler.check);
router.post('/add', subjectsControler.add);
router.post('/list');

module.exports = router;
