'use strict';

/* Search Services */

var searchServices = angular.module('searchServices', ['ngResource']);

searchServices.factory('NavSearch', [ '$resource', '$routeParams', function($resource, $routeParams) {
	//debugger;
	return $resource('../api/search/:search_query', {search_query: '$routeParams'}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);