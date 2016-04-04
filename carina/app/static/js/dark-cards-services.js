'use strict';

/* Cards Services */

var cardsServices = angular.module('cardsServices', ['ngResource']);

cardsServices.factory('Cards', [ '$resource', function($resource) {
	return $resource('../api/cards', {}, {		// Assuming /api/cards is how we get this information
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);