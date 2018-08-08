const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/conditions', (request, response, next) => {
  pool.query(
    'SELECT * FROM enrollments JOIN course_subjects ON course_subjects.subject_name = enrollments.course_subject',
    (err, res) => {
      if (err) return next(err);

      response.json(res.rows);
    }
  )
});

// BEGIN SECTION : of codes not demonstrated in the tutorial; is yet to be tested & reviewed fully.
router.get('/', (request, response, next) => {
  pool.query('SELECT * FROM enrollments ORDER BY enrollment_priority ASC', (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

router.get('/:enrollment_priority', (request, response, next) => {
  const { enrollment_priority } = request.params;

  pool.query('SELECT * FROM enrollments WHERE enrollment_priority = $1', [enrollment_priority], (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

router.post('/', (request, response, next) => {
  const { student, course_subject } = request.body;

  pool.query('INSERT INTO enrollments(student, course_subject) VALUES($1, $2)',
    [student, course_subject],
    (err, res) => {
      if (err) return next(err);

      response.redirect('/enrollments');
    }
  );
});

router.put('/:enrollment_priority', (request, response, next) => {
  const { enrollment_priority } = request.params;  
  const keys = ['student',  'course_subject']; 
  const fields = [];

  keys.forEach(key => {
    if (request.body[key]) fields.push(key);
  });

  fields.forEach((field, index) => {
    pool.query(
      `UPDATE enrollments SET ${field}=($1) WHERE enrollment_priority=($2)`,
      [request.body[field], enrollment_priority],
      (err, res) => {
        if (err) return next(err);

        if (index === fields.length - 1) response.redirect('/enrollments');
      }
    )
  });
});

router.delete('/:enrollment_priority', (request, response, next) => {
  const { enrollment_priority } = request.params;

  pool.query('DELETE FROM enrollments WHERE enrollment_priority=($1)', [enrollment_priority], (err, res) => {
    if (err) return next(err);

    response.redirect('/enrollments');
  });
});
// END SECTION : of codes not demonstrated in the tutorial; is yet to be tested & reviewed fully.

module.exports = router;