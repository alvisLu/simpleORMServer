const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./config/database');
const app = express();

// test db connect
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

app.get('/', (req, res) => {
  res.send('index');
});

app.use(require('./routes/teachers'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
