 // Configurational variables

 var environments = {};

 environments.staging = {
 	'httpPort' : 3000,
 	'httpsPort': 3001,
 	'envName' : 'staging'
 };

 environments.production = {
 	'httpPort' : 5000,
 	'httpsPort': 5001,
 	'envName' : 'production'
 };

// Getting value from cmd while executing js
var selectedEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : 'staging';
console.log(environments[selectedEnvironment])
var exportEnvironment = typeof(environments[selectedEnvironment]) == 'object' ? environments[selectedEnvironment] : environments.staging ;

module.exports = exportEnvironment