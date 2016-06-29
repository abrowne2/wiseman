//app.

var express = require('express');
var bodyParser = require('body-parser');
var wisd = require('./wise/wisdom');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});


app.get('/wise', function (req, res) {
  res.json({text: wisd.fetchKnowledge(), response_type: "in_channel"});
});


app.listen(process.env.PORT || 8080);
