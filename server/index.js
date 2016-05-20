var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('<h1>I am from the built server</h1>');
});

app.listen(PORT, function () {
  console.log('we hear you');
});
