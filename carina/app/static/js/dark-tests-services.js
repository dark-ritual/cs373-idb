'use strict';

/* Tests Services */

var testsServices = angular.module('testsServices', ['ngResource']);

testsServices.factory('Tests', [ '$resource', function($resource) {
	/*return $resource('../api/artists', {}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});*/
}]);