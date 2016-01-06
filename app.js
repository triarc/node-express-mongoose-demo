var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('config');

var middlewares = require('./middlewares');
var todo = require('./routes/todo');

var app = express();

var werker

var mongodbUri = process.env.MONGOLAB_URI || 
	(process.env.MONGO_PORT_27017_TCP_ADDR ? 'mongodb://' + process.env.MONGO_PORT_27017_TCP_ADDR + ':' + process.env.MONGO_PORT_27017_TCP_PORT : null) ||
	config.get('mongodb');

mongoose.connect(mongodbUri);
mongoose.Promise = require('bluebird');

/* middlewares */
app.use(middlewares.logger);
app.use(bodyParser.json())

/* routes */
app.use('/todo', todo);

module.exports = app;