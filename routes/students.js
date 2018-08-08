const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (request, response, next) => {
  pool.query('SELECT * FROM students ORDER BY id ASC', (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

router.get('/:id', (request, response, next) => {
  const { id } = request.params;

  pool.query('SELECT * FROM students WHERE id = $1', [id], (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

router.post('/', (request, response, next) => {
  const { full_name, alias } = request.body;

  pool.query('INSERT INTO students(full_name, alias) VALUES($1, $2)',
    [full_name, alias],
    (err, res) => {
      if (err) return next(err);

      response.redirect('/students');
    }
  );
});

router.put('/:id', (request, response, next) => {
  const { id } = request.params;  
  const keys = ['full_name', 'alias']; 
  const fields = [];

  keys.forEach(key => {
    if (request.body[key]) fields.push(key);
  });

  fields.forEach((field, index) => {
    pool.query(
      `UPDATE students SET ${field}=($1) WHERE id=($2)`,
      [request.body[field], id],
      (err, res) => {
        if (err) return next(err);

        if (index === fields.length - 1) response.redirect('/students');
      }
    )
  });
});

router.delete('/:id', (request, response, next) => {
  const { id } = request.params;

  pool.query('DELETE FROM students WHERE id=($1)', [id], (err, res) => {
    if (err) return next(err);

    response.redirect('/students');
  });
});

module.exports = router;






