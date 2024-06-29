const Router = require('express');
const router = new Router();
const tutorsControler = require('../controllers/tutorsController');

router.post('/add', tutorsControler.add);

module.exports = router;
