var express = require('express');
var router = express.Router();

var Todo = require('../models').Todo;

router.get('/', function(req, res, next) {
	Todo.find({})
		.then(function(todos) {
			res.json(todos);
		})
		.catch(function(err) {
			next(err);
		});
});

router.post('/', function(req, res, next) {
	new Todo(req.body).save()
		.then(function(todo) {
			res.json(todo);
		})
		.catch(function(err) {
			next(err);
		});
});

router.put('/:id', function(req, res, next) {
	Todo.findOneAndUpdate({'_id': req.params.id}, req.body)
		.then(function(todo) {
			res.send(201);
		})
		.catch(function(err) {
			next(err);
		});
});

router.delete('/:id', function(req, res, next) {
	Todo.remove({'_id': req.params.id})
		.then(function(todo) {
			res.send(201);
		})
		.catch(function(err) {
			next(err);
		});
});


module.exports = router;