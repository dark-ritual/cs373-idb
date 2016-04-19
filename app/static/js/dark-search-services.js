'use strict';

/* Search Services */

var searchServices = angular.module('searchServices', ['ngResource']);

searchServices.factory('NavSearch', [ '$resource', function($resource) {
	return $resource('../api/search/:q', {q:'@q'}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);