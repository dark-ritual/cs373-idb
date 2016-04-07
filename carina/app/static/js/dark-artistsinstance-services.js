'use strict';

/* Artists Services */

var artistsinstanceServices = angular.module('artistsinstanceServices', ['ngResource']);

artistsinstanceServices.factory('ArtistsInstance', [ '$resource', function($resource) {
	/*return $resource('../api/artists', {}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});*/
}]);