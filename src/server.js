var express = require('express');
var body_parser = require('body-parser');
var app = express();




// Config
var port = 3000;

app.use('/api/v1', require('../routes/api.js')(express));
app.use(express.static('public'));




var server = app.listen(port, function() {
	console.log('Server Active on', port);
});

module.exports = server;