const { Router } = require('express');
const students = require('./students');
const course_subjects = require('./course_subjects');
const enrollments = require('./enrollments');

const router = Router();

router.use('/students', students);
router.use('/course_subjects', course_subjects);
router.use('/enrollments', enrollments);

module.exports = router;