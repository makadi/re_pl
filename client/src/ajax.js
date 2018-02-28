
function mainAjax(data) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(data.method, data.url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        reject(xhr.responseText);
      }
    }
    xhr.send(JSON.stringify(data.body));
  });
}

function getPlaylists() {
  let url = 'http://localhost:3000/playlists';
  return mainAjax({
    method: 'GET',
    url: url,
    body: ''
  });
}

const getTracklist = function() {
  console.log('getTracksAjax');
  let url = 'http://localhost:3000/tracks';
  return mainAjax({
    method: 'GET',
    url: url,
    body: ''
  });
}

module.exports = {
  getPlaylists,
  getTracklist
};