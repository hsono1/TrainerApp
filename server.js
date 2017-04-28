var express = require('express');
var path = require('path');
var body_parser = require('body-parser');


var app = express();


app.use( express.static(path.join( __dirname, './client/static/')));


app.use(body_parser.urlencoded({extended: true}));
app.set( "views", path.join(__dirname, "./client/views/"));
app.set( "view engine", 'ejs');


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);



app.listen( 8000, function(){

	console.log('Listening to port 8000');
})



