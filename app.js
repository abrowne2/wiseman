'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var wise = require('./wise/wisdom.js');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/wise', function (req, res) {
  res.header('Cache-Control', 'no-cache,max-age=0,no-store,post-check=0,pre-check=0');
  res.header('Pragma', 'no-cache');
  res.json({text: wise, response_type: "in_channel"});
});

app.listen(process.env.PORT || 8080);
