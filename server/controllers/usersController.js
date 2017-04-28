var mongoose = require('mongoose');
var User  = mongoose.model('User');
var messages = [];



module.exports = {

	 

	validate : function(req,res){

		var client = req.body;
		if ( client.password.length < 8 )
		{
			messages.push( {password : "Password needs to be at least 8 characters" });
			console.log("over", messages);

			res.redirect('/client/registration' );
		}


	


		// User.create(req.body, function(err,result){
		// 	if(err)
		// 	{
		// 		res.json(err);
		// 	}
		// 	else
		// 	{
		// 		res.json(result);
		// 	}


		// });



	},


	clientRegistrationView : function( req, res)
	{
		console.log("here", messages.length);
		
		res.render('clientRegistration', {message : messages});


	}







}