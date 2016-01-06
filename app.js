var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('config');

var middlewares = require('./middlewares');
var todo = require('./routes/todo');

var app = express();

mongoose.connect(config.get('mongodb'));
mongoose.Promise = require('bluebird');

/* middlewares */
app.use(middlewares.logger);
app.use(bodyParser.json())

/* routes */
app.use('/todo', todo);

module.exports = app;