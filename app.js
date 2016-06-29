

var express = require('express');
var bodyParser = require('body-parser');
var wise = require('./wise/wisdom.js');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/wise?_=' + new Date().getTime(), function (req, res) {
  res.send({text: wise, response_type: "in_channel"});
});

app.listen(process.env.PORT || 8080);
