const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');

router.get('/', (req, res) => {
  Teacher.findAll()
    .then((teachers) => {
      res.send(teachers);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Teacher.findOne({ where: { id } })
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

module.exports = router;
