import { getPlaylists } from '../../ajax';

const $playlist = document.querySelector('.playlists-container');
let playlistElements = null;
let playlists = null;


const getPlaylistData = function() {
  getPlaylists().then(playlistData => {
    playlists = playlistData;
    console.log(playlistData);
    createPlaylistElements(playlists);
  });
}

const createPlaylistElements = function() {
  const $playlist = document.querySelector('.playlists-container');
  let playlistElements = null;
  $playlist.innerHTML = '';
  playlists.forEach(function(pl, index) {
    const playlistRow = document.createElement('li');
    playlistRow.innerHTML = `<span>${index + 1}</span>
                              <span>${pl.name}</span>`;
                              
    $playlist.appendChild(playlistRow);
  })
}

module.exports = {
  getPlaylistData, 
  createPlaylistElements
};