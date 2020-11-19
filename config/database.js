const { Sequelize } = require('sequelize');

module.exports = new Sequelize('db', 'postgres', 'postgres', {
  host: 'localhost',
  port: '5435',
  dialect: 'postgres',
  define: {
    timestamps: false, // disable createAt and updateAt
  },
});
