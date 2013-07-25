var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.header('Content-Type', 'text/html');
  response.send(fromFile('index.html'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var fs = require('fs');
var fromFile = function(fileName) {
  var buffer = new Buffer(fs.readFileSync(fileName), "utf-8");
  return buffer.toString('utf-8');
}
