const express = require('express')

const app = express();

var path = require('path');

app.get('/', function(req, res) {
    console.log(path.join(__dirname + '/index.html'));
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/cplusplus', express.static('cplusplus'));
app.use('/webdev', express.static('webdev'));
app.use('/oop', express.static('oop'));
app.use('/gamedev', express.static('gamedev'));

// app.get('/', (req, res) => {
//     res.send('An alligator approaches!');
// });

app.listen(3000, () => console.log('NodeJS1 Server Listening on port 3000!'));