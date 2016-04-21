'use strict';

/* Sets Services */

var setsServices = angular.module('setsServices', ['ngResource']);

setsServices.factory('Sets', [ '$resource', '$routeParams', function($resource, $routeParams) {
	
	return $resource('../api/sets/page/:page_num', {page_num: '$routeParams'}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);