/*
 *Author: Vicky Abishek
 *Date: 21/10/2018
*/


// Primary file for the API

//Dependencies
var http = require('http');
var url = require('url');

// Creating a server object
var server = http.createServer(
	function(request, response){

		// Parse the URL and send response and log the request path
		var parsedURL = url.parse(request.url, true); //true returns the query string
		// Converts request URL to a json format of required values
		var path = parsedURL.pathname;
		var trimmedPath = path.replace(/^\/+|\/+$/g,'');
		// var y = request.url;
		// console.log(x);
		// console.log(y);

		// var result = "";
		// result += JSON.stringify(x);
		// result += JSON.stringify(y);
		response.end("Hello from Node Server \n");

		console.log("Request received on path: " + trimmedPath);
	});

// Making the server listen to port 3000
server.listen(3000, 
	function() { 
		console.log('Server listening to port 3000! Awesome !!! ');
	});


