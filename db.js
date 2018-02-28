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

const dbQuery = function(query) {
  return new Promise(function(resolve, reject) {
    connection.query(query, 
      function(err, results) {
          if (err) {
               reject(err);
          } else {
              resolve(results);
          }
    });
  });
}

const getPlaylists = function() {
  console.log('getAllPlaylistsQueryString');
  return dbQuery(`SELECT * from playlist;`);
}

const getAllTracks = function() {
  console.log('getAllTracksQueryString');
  return dbQuery(`SELECT * FROM one;`);
}

module.exports = {
  getPlaylists,
  getAllTracks
}