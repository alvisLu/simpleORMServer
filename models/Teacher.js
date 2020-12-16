const Sequelize = require('sequelize');
const db = require('../config/database');

const Teacher = db.define('teacher', {
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  school: {
    type: Sequelize.STRING,
  },
  hire_date: {
    type: Sequelize.STRING,
  },
  salary: {
    type: Sequelize.STRING,
  },
});

Teacher.sync({ force: true });
module.exports = Teacher;
