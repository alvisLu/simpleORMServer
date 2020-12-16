const { Sequelize } = require('sequelize');

module.exports = new Sequelize('db', 'postgres', 'postgres', {
  host: 'simpleormserver_db_1',
  port: '5432',
  dialect: 'postgres',
  define: {
    timestamps: false, // disable createAt and updateAt
  },
});
