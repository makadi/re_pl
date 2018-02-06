const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/src', express.static('./src'));
app.use('/build', express.static('./build'));
app.use(express.json());


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/src/html/index.html');
});

app.listen(3000, () => console.log('running on port 3000'));

