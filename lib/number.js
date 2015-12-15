'use strict';

// MODULES //

var randGamma = require( 'distributions-gamma-random/lib/number.js' );


// GENERATE INVERSE GAMMA RANDOM NUMBERS //

/**
* FUNCTION random( alpha, beta[, rand] )
*	Generates a random draw from a inverse-gamma distribution with parameters `alpha` and `beta`.
*	Uses the fact that when X ~ Gamma( alpha, beta ), then 1/X ~ InvGamma( alpha, 1/beta )
*
* @param {Number} alpha - shape parameter
* @param {Number} beta - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number} random draw from the specified distribution
*/
function random( alpha, beta, rand ) {
	var x = randGamma( alpha, 1/beta, rand );
	return 1/x;
}

module.exports = random;
