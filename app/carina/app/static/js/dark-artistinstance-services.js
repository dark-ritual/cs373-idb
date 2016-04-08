'use strict';

/* Artist Instance Services */

var artistinstanceServices = angular.module('artistinstanceServices', ['ngResource']);

artistinstanceServices.factory('ArtistInstance', [ '$resource', '$routeParams', function($resource, $routeParams) {
	
	return $resource('../api/artists/:artist_id', {artist_id: '$routeParams'}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);