'use strict';

/* Cards Services */

var cardsServices = angular.module('cardsServices', ['ngResource']);

cardsServices.factory('Cards', [ '$resource', '$routeParams', function($resource, $routeParams) {

	return $resource('../api/cards/page/:page_num', {page_num: '$routeParams'}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);