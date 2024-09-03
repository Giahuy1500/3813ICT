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
http.listen(PORT,  ()=> {
    console.log(`Server running on port ${PORT}`);
});