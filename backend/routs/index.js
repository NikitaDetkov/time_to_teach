const Router = require('express');
const router = new Router();
const lessonsRouter = require('./lessonsRouter');
const subjectsRouter = require('./subjectsRouter');
const tutorsRouter = require('./tutorsRouter');
const studentsRouter = require('./studentsRouter');

router.use('/subjects', subjectsRouter);
router.use('/lessons', lessonsRouter);
router.use('/tutors', tutorsRouter);
router.use('/students', studentsRouter);

module.exports = router;
