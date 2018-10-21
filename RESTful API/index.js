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
		var parsedURL = url.parse(request.url, true); //true parses only queryString
		// Converts request URL to a json format of required values
		var path = parsedURL.pathname;
		var trimmedPath = path.replace(/^\/+|\/+$/g,'');

		// Get the type of the HTTP Method
		var method = request.method;

		// Get the query String as an Object
		var queryString = parsedURL.query;

		// Get the request headers
		var headers = request.headers;

		// Result for DEV Purpose
		var result = "";
		result += " method : " + method + "\n";
		result += " path : " + path + "\n";
		result += " parsedURL :" + JSON.stringify(parsedURL) + "\n";
		result += " headers :" + JSON.stringify(headers) + "\n";

		response.end("Hello from Node Server \n" + result + " \n");

		console.log("Request received on path: " + trimmedPath +
					"With " + method + " method" +
					"With :" +  JSON.stringify(queryString) + " Query Strings"
			);
	});

// Making the server listen to port 3000
server.listen(3000, 
	function() { 
		console.log('Server listening to port 3000! Awesome !!! ');
	});


