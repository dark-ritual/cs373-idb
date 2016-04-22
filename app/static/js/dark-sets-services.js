'use strict';

/* Sets Services */

var setsServices = angular.module('setsServices', ['ngResource']);

setsServices.factory('Sets', [ '$resource', '$routeParams', function($resource, $routeParams) {
	
	return $resource('../api/sets/page/:page_num/:sort_col', {page_num: '$routeParams', sort_col:'$routeParams'}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);