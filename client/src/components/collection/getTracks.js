import { getTracklist } from '../../ajax';


const getTracklistData = function() {
  getTracklist().then(trackData => {
    let tracks = trackData;
    console.log(trackData);
    createTracklistElements(tracks);
  });
}

module.exports = {
  getTracklistData
};
