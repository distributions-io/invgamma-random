'use strict';

// MODULES //

var partialGamma = require( 'distributions-gamma-random/lib/partial.js' );


// PARTIAL //

/**
* FUNCTION: partial( alpha, beta[, rand] )
*	Partially applies `alpha` and `beta` and returns a function
*	to generate random variables from the inverse-gamma distribution.
*
* @param {Number} alpha - shape parameter
* @param {Number} beta - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Function} function which generates random draws from the specified distribution
*/
function partial( alpha, beta, rand ) {
	var drawGamma = partialGamma( alpha, 1/beta, rand );
	/**
	* FUNCTION: draw( x )
	*	Generates a random draw for a inverse-gamma distribution with parameters `alpha` and `beta`.
	*	Uses the fact that when X ~ Gamma( alpha, beta ), then 1/X ~ InvGamma( alpha, 1/beta )
	*
	* @private
	* @returns {Number} random draw from the specified distribution
	*/
	return function draw() {
		return 1 / drawGamma();
	}; // end FUNCTION draw()
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
