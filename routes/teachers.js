const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');

router.get('/teachers', (req, res) => {
  Teacher.findAll()
    .then((teachers) => {
      res.send(teachers);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

router.get('/teachers/:id', (req, res) => {
  const { id } = req.params;
  Teacher.findOne({ where: { id } })
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

router.post('/teacher', (req, res) => {
  const { first_name, last_name, school, hire_date, salary } = req.body;
  Teacher.create({
    first_name,
    last_name,
    school,
    hire_date,
    salary,
  })
    .then((data) => {
      res.send(data.dataValues);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.put('/teacher/:id', (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, school, hire_date, salary } = req.body;
  Teacher.update(
    { first_name, last_name, school, hire_date, salary },
    { where: { id } }
  )
    .then((data) => {
      if (data[0] === 1) {
        res.send(id);
      } else {
        res.status(400).send(`Can't find the ID: ${id}`);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
