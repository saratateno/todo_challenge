var express = require('express');
var logger = require('morgan');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(logger('dev'));
app.use(express.static(__dirname));

app.get("/", function(req, res) {
  res.sendFile('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
