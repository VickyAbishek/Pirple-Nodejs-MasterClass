/*
 *	Author: Vicky Abishek
 *	Date: 20/10/2018
 */


 // Dependencies 
 var mathLib = require('./lib/math');

 // Application object
 var app = {};

 // Config
 app.config = {
 	'timeoutDuration' : 2000
 };

app.printRandomNo = function() {
	console.log(mathLib.getRandomNumber(123,3424)); 
}

app.indefiniteLoop = function() {
	setInterval(app.printRandomNo, app.config.timeoutDuration);
}

app.indefiniteLoop();