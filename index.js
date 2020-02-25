const express = require('express')

const app = express();

var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    console.log(path.join(__dirname + '/index.html'));
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('css', express.static('css'));

// app.get('/', (req, res) => {
//     res.send('An alligator approaches!');
// });

app.listen(3000, () => console.log('NodeJS1 Server Listening on port 3000!'));