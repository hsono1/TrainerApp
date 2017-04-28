var mongoose = require('mongoose');

var Schema  = mongoose.Schema;

var UsersSchema = new mongoose.Schema({


	first_name : String,
	last_name : String, 
	status : String,
	email : String,
	phone_number : String,
	password : String,

}, {timestamps : true } );


var User = mongoose.model('User', UsersSchema );


