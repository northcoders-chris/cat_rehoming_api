// our main server file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');
const app = express();
const jsonParser = bodyParser.json()

mongoose.connect('mongodb://localhost/cats_db', function (err) {
  if (err) {
    console.log(err);
    process.exit();
  }
});

app.use(jsonParser);
app.use('/api', apiRouter);

app.get('/', function (req, res) {
  res.send('Hi my name is what, my name is who, my name is chiki chiki slim shady');
});

app.listen(8080, function (err) {
  if (err) {
    console.log(err);
    process.exit();
  }
  console.log('Connected to server on port 8080');
});
