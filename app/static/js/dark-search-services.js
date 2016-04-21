'use strict';

/* Search Services */

var searchServices = angular.module('searchServices', ['ngResource']);

searchServices.factory('NavSearch', [ '$resource', '$routeParams', function($resource, $routeParams) {
	//debugger;
	return $resource('../api/search/:search_query/:page_num', {search_query: '$routeParams', page_num: '$routeParams'}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);