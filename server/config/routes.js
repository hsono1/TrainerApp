var userController = require('./../controllers/usersController.js');


module.exports = function(app)
{
	app.get('/', function(req,res){


		res.render('index');

	});

	app.get('/create/user', function(req,res){

		res.json({name : 'Hans'});
	});


	app.get('/trainers/registration', function(req,res){

		res.render('trainerRegistration')
	});

	app.get('/client/registration', function(req,res){
 		userController.clientRegistrationView(req, res);

	});

	app.post('/client/add', function(req,res){

		userController.validate(req,res);
	});


}