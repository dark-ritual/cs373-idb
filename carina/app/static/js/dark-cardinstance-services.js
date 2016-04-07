'use strict';

/* Card Instance Services */

var cardinstanceServices = angular.module('cardinstanceServices', ['ngResource']);

cardinstanceServices.factory('CardInstance', [ '$resource', function($resource) {
	
	return $resource('../api/cardinstace', {}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);