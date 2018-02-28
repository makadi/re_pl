import { getTracklist } from '../../ajax';


const getTracklistData = function() {
  getTracklist().then(trackData => {
    let tracks = trackData;
    console.log(trackData);
    createTracklistElements(tracks);
  });
}

const createTracklistElements = function(tracks) {
  const $tracklist = document.querySelector('.tracks-container');
  $tracklist.innerHTML = '';
  tracks.forEach(function(track, index) {
    const trackRow = document.createElement('li');
    trackRow.innerHTML = `<span>${index + 1}</span>
                          <span class="tn">${track.name}</span>
                          <span>${track.length}</span>`;
    $tracklist.appendChild(trackRow);
  })
}

module.exports = {
  getTracklistData,
  createTracklistElements
};
