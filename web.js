var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fromFile('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var fs = require('fs');
var fromFile = function(fileName) {
  return fs.readFileSync(fileName);
}
