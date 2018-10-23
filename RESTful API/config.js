 // Configurational variables

 var environments = {};

 environments.staging = {
 	'port' : 3000,
 	'envName' : 'staging'
 };

 environments.production = {
 	'port' : 5000,
 	'envName' : 'production'
 };

// Getting value from cmd while executing js
var selectedEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : 'staging';
console.log(environments[selectedEnvironment])
var exportEnvironment = typeof(environments[selectedEnvironment]) == 'object' ? environments[selectedEnvironment] : environments.staging ;

module.exports = exportEnvironment