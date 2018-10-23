/*
 *Author: Vicky Abishek
 *Date: 21/10/2018

*/


// Primary file for the API

//Dependencies
var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;
var config = require('./config.js')

// Creating a server object
var server = http.createServer(
	function(request, response){

		// @TODO Parse the URL and send response and log the request

		var parsedURL = url.parse(request.url, true); //true -> parses only queryString

		// Converts request URL to a json format of required values
		var path = parsedURL.pathname;
		var trimmedPath = path.replace(/^\/+|\/+$/g,'');

		var method = request.method;
		var headers = request.headers;

		// Get the query String as an Object
		var queryString = parsedURL.query;

		// Get the payload, if any
		// Payload here means body content in POST ( in GET we can't send data through BODY)
		var decoder = new StringDecoder('utf-8');
		var buffer = "";

		// Won't be always called, will be called only when payload is there
		request.on('data', function(data) {
			buffer += decoder.write(data);
		});

		// Always will be called, irrespective of whether payload is there or not
		request.on('end',function(){
			buffer += decoder.end();

			//Chosing the handler
			var chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound
			var data = {	
				'trimmedPath' : trimmedPath,
				'queryStringPath' : queryString,
				'method' : method,
				'headers' : headers,
				'payload' : buffer
			};

			chosenHandler(data, function(statusCode,payload) { 
				// Use default statusCodes and payload in case of erraneous ones

				statusCode = typeof(statusCode) === 'number' ? statusCode : 250 ;
				payload = typeof(payload) === 'object' ? payload : {} ;
				payload = JSON.stringify(payload); // Converting Object to String

				response.setHeader('Content-Type','application/json');
				response.writeHead(statusCode);
	 		   	response.end(payload);
				console.log("Returning Response: ", statusCode, payload);
			});

			response.end("Hello from Node Server :" + buffer + " \n");
		// @TODO find out why when buffer is printed outside gives empty value.
		});

		
	});

// Making the server listen to a particular port
server.listen(config.port, 
	function() { 
		console.log('Server listening to port ' + config.port +'! Mode: ' + config.envName);
	});

var handlers = {};

handlers.sample = function(data, callback) {
	callback(200,{'name': 'sample handler'});
};

handlers.notFound = function(data, callback) {
	callback(404);
};

// Creating a router
var router = {
	'sample': handlers.sample
};