"use strict";

var mysql      = require('mysql');
var express    = require('express');
var bodyParser = require('body-parser');
var _          = require('underscore');

var app					= express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'gallery',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8884;

// ROUTES FOR API
// =================================================
var router = express.Router();

router.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
}); 


// Get image gallery
router.route('/getimages')
.get(function(req, res) {
	connection.query('SELECT * FROM gallery order by id DESC LIMIT 100', [], function(err, rows, fields) {
		res.send(rows);
	});
});

app.use('/api', router);

app.listen(port);

console.log(new Date() + ' | ' + 'cool port ' + port);



