const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

app.use(express.json());

app.use('/server/static/', express.static('./server/static/'));
app.use('/client', express.static('./client'));
app.use('/build', express.static('./build'));

app.use(bodyParser.urlencoded({ extended: false }));

const authRoutes = require('./server/routes/validator');
app.use('/validator', authRoutes);

app.get([
  '/',
  '/dashboard',
  '/collection',
  '/discover',
  '/settings',
  '/login'
], function(req, res) {
  res.sendFile(__dirname + '/server/static/index.html');
});

app.get('/playlists', function(req, res) {
  db.getPlaylists()
    .then(data => res.json(data))
    .catch(e => {
      console.log(e);
      res.status(500).send(e.code);
    });
});

app.get('/tracks', function(req, res) {
  db.getAllTracks()
      .then(data => res.json(data))
      .catch(e => {
        console.log(e);
        res.status(500).send(e.code);
      });
});

app.listen(3000, () => console.log('running on port 3000'));
