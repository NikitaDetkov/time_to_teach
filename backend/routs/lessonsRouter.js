const Router = require('express');
const router = new Router();
const lessonsControler = require('../controllers/lessonsController');

router.get('/', (req, res) => res.json('sd'));
router.get('/list', lessonsControler.getAll);
router.get('/check', lessonsControler.check);
router.post('/add', lessonsControler.add);
router.post('/list');

module.exports = router;
