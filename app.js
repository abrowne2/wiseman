'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var wise = require('./wise/wisdom.js');
var app = express.static();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/wise', function (req, res) {
  res.header('Cache-Control', 'no-cache');
  res.json({text: wise, response_type: "in_channel"});
});

app.listen(process.env.PORT || 8080);
