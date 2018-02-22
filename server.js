const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const app = express();

app.use(express.json());

app.use('/server/static/', express.static('./server/static/'));
app.use('/client/assets', express.static('./client/assets'));
app.use('/assets', express.static('./assets'));
app.use('/build', express.static('./build'));

app.use(bodyParser.urlencoded({ extended: false }));

const authRoutes = require('./server/routes/validator');
app.use('/validator', authRoutes);

app.get([
  '/',
  '/collection',
  '/discover',
  '/settings'
], function(req, res) {
  res.sendFile(__dirname + '/server/static/index.html');
});


app.listen(3000, () => console.log('running on port 3000'));
