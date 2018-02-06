'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'indigo',
  database: 'audio_player'
});

connection.connect(function (err){
  if(err){
      console.log('error connecting to db');
      return;
  };
  console.log('connected to db');
});