const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (request, response, next) => {
  pool.query('SELECT * FROM course_subjects ORDER BY id ASC', (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

router.get('/:id', (request, response, next) => {
  const { id } = request.params;

  pool.query('SELECT * FROM course_subjects WHERE id = $1', [id], (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

// BEGIN SECTION : of codes not demonstrated in the tutorial; is yet to be tested & reviewed fully. 
router.post('/', (request, response, next) => {
  const { subject_name, hard_prerequisite, duration } = request.body;

  pool.query(
    'INSERT INTO course_subjects(subject_name, hard_prerequisite, duration) VALUES($1, $2, $3)',
    [subject_name, hard_prerequisite, duration],
    (err, res) => {
      if (err) return next(err);

      response.redirect('/course_subjects');
    }
  )
});

router.put('/:id', (request, response, next) => {
  const { id } = request.params;  
  const keys = ['subject_name', 'hard_prerequisite', 'duration']; 
  const fields = [];

  keys.forEach(key => {
    if (request.body[key]) fields.push(key);
  });

  fields.forEach((field, index) => {
    pool.query(
      `UPDATE course_subjects SET ${field}=($1) WHERE id=($2)`,
      [request.body[field], id],
      (err, res) => {
        if (err) return next(err);

        if (index === fields.length - 1) response.redirect('/course_subjects');
      }
    )
  });
});

router.delete('/:id', (request, response, next) => {
  const { id } = request.params;

  pool.query('DELETE FROM course_subjects WHERE id=($1)', [id], (err, res) => {
    if (err) return next(err);

    response.redirect('/course_subjects');
  });
});
// END SECTION : of codes not demonstrated in the tutorial; is yet to be tested & reviewed fully.

module.exports = router;