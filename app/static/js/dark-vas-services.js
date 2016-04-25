'use strict';

/* Vas Services */

var vasServices = angular.module('vasServices', ['ngResource']);

vasServices.factory('Vas', [ '$resource', '$routeParams', function($resource, $routeParams) {

	return $resource('http://darkritual.cards/api/:query', {query: '$routeParams'}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);