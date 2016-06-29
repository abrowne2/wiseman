'use strict';
process.env.NODE_ENV = 'production';
var express = require('express');
var bodyParser = require('body-parser');
var wise = require('./wise/wisdom.js');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

function nocache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

app.get('/wise', nocache, function (req, res) {
  res.json({text: wise, response_type: "in_channel"});
});

app.listen(process.env.PORT || 8080);
