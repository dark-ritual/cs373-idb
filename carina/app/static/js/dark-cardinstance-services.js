'use strict';

/* Card Instance Services */

var cardinstanceServices = angular.module('cardinstanceServices', ['ngResource']);

cardinstanceServices.factory('CardInstance', [ '$resource', '$routeParams', function($resource, $routeParams) {
	
	return $resource('../api/cards/:card_id', {card_id: '$routeParams'}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);