'use strict';

/* App Module */

var dark = angular.module('dark', [ 'ngRoute', 'darkControllers',
		'cardsServices', 'setsServices', 'artistsServices', 'cardinstanceServices' ]);

dark.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/cards', {
		templateUrl : '../static/templates/cards.html',
		controller : 'CardsController'
	}).when('/sets', {
		templateUrl : '../static/templates/sets.html',
		controller : 'SetsController'
	}).when('/artists', {
		templateUrl : '../static/templates/artists.html',
		controller : 'ArtistsController'
	}).when('/about', {
		templateUrl : '../static/templates/about.html',
		controller : 'AboutController'
	}).when('/temp', {
		templateUrl : '../static/templates/cardinstance.html',
		controller : 'CardInstanceController'
	}).otherwise({
		templateUrl : '../static/templates/home.html',
		controller : 'HomeController'
	})
} ]);