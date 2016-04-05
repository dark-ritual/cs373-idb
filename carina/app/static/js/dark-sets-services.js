'use strict';

/* Sets Services */

var setsServices = angular.module('setsServices', ['ngResource']);

setsServices.factory('Sets', [ '$resource', function($resource) {
	return $resource('../api/sets', {}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);