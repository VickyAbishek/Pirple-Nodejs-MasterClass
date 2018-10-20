/*
 *	Author: Vicky Abishek
 *	Date: 20/10/2018
 */

var math = {};


//Getting a random number between given range
math.getRandomNumber = function(min, max) {
	min = typeof(min) == 'number' && min % 1 === 0 ? min : 0;
	max = typeof(max) == 'number' && max % 1 === 0 ? max : 0;
	return Math.floor(Math.random()*(max-min+1)+min);
}


// Exporting the library
module.exports = math;