const PORT = 3030;

var cors = require('cors');
var express = require('express'); // import express.js
var app = express();
var bodyParser = require('body-parser');
var path = require('path')
// Cross origin resource sharing to cater for port 4200 to pot 3000
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + "../dist/3813-ict-assignment/"))

var http = require('http').Server(app)


app.post('/login', require('./router/postLogin'))
app.post('/createUser', require('./router/postCreateUser'))
app.post('/createGroup', require('./router/postCreateGroup'))
app.post('/createChannel', require('./router/postCreateChannel'))
app.post('/deleteGroup', require('./router/postDeleteGroup'))
app.post('/deleteUser', require('./router/postDeleteUser'))
app.get('/users', require('./router/getUsers'))
app.get('/groups', require('./router/getGroups'))
app.post('/channels', require('./router/postChannels'))
app.get('/assignUser', require('./router/postAssignUser'))
http.listen(PORT,  ()=> {
    console.log(`Server running on port ${PORT}`);
});