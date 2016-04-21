'use strict';

/* Artists Services */

var artistsServices = angular.module('artistsServices', ['ngResource']);

artistsServices.factory('Artists', [ '$resource', '$routeParams', function($resource, $routeParams) {
	
	return $resource('../api/artists/page/:page_num', {page_num: '$routeParams'}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);