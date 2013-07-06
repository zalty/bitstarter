var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var htmlStr = new Buffer(fs.readFileSync('index.html')).toString();
console.log(htmlStr);
app.get('/', function(request, response) {
  response.send(htmlStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});