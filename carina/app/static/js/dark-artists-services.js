'use strict';

/* Artists Services */

var artistsServices = angular.module('artistsServices', ['ngResource']);

artistsServices.factory('Artists', [ '$resource', function($resource) {
	return $resource('../api/artists', {}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);