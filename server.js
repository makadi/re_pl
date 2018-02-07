'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const app = express();

app.use(express.json());

app.use('/client/assets', express.static('./client/assets'));
app.use('/build', express.static('./build'));
app.use('/assets', express.static('./assets'));
app.use('/server/static/', express.static('./server/static/'));

// app.use(bodyParser.urlencoded({ extended: false }));

// const authRoutes = require('./server/routes/auth');
// app.use('/auth', authRoutes);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/server/static/index.html');
});


app.listen(3000, () => console.log('running on port 3000'));
