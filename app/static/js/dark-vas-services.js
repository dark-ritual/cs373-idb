'use strict';

/* Vas Services */

var vasServices = angular.module('vasServices', ['ngResource']);

vasServices.factory('Vas', [ '$resource', function($resource) {

	return $resource(null, null, {
		states: {
			//url: 'http://virtual-address.space/api/states/?', // BROKEN DNS! THEY HAVE 2 IP's WITH DIFFERENT CODE!
			url: 'http://146.20.68.43/api/states/?',
			method: 'GET',
			headers:{'Content-Type':'application/json; charset=UTF-8'},
			isArray: false
		},
		cities: {
			//url: 'http://virtual-address.space/api/cities/?', // BROKEN DNS! THEY HAVE 2 IP's WITH DIFFERENT CODE!
			url: 'http://146.20.68.43/api/cities/?',
			method: 'GET',
			headers:{'Content-Type':'application/json; charset=UTF-8'},
			isArray: false
		},
		neighborhoods: {
			//url: 'http://virtual-address.space/api/neighborhoods/?', // BROKEN DNS! THEY HAVE 2 IP's WITH DIFFERENT CODE!
			url: 'http://146.20.68.43/api/neighborhoods/?',
			method: 'GET',
			headers:{'Content-Type':'application/json; charset=UTF-8'},
			isArray: false
		}
	});
}]);