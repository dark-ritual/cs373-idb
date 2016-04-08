'use strict';

/* Cards Services */

var cardsServices = angular.module('cardsServices', ['ngResource']);

cardsServices.factory('Cards', [ '$resource', function($resource) {
	return $resource('../api/cardsTable', {}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);