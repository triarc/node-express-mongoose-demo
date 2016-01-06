var mongoose = require('mongoose');

module.exports.Todo = mongoose.model('Todo', { 
	name: { type: String, required: true, unique: true }, 
  	created_at: Date,
  	updated_at: Date
});