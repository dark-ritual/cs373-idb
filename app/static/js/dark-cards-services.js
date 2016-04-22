'use strict';

/* Cards Services */

var cardsServices = angular.module('cardsServices', ['ngResource']);

cardsServices.factory('Cards', [ '$resource', '$routeParams', function($resource, $routeParams) {

	return $resource('../api/cards/page/:page_num/:sort_col', {page_num: '$routeParams', sort_col:'$routeParams'}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);