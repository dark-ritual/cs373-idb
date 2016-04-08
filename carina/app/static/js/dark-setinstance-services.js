'use strict';

/* Set Services */

var setinstanceServices = angular.module('setinstanceServices', ['ngResource']);

setinstanceServices.factory('SetInstance', [ '$resource', '$routeParams', function($resource, $routeParams) {

	return $resource('../api/sets/:set_id', {set_id: '$routeParams'}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);
