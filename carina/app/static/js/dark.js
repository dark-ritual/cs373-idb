'use strict';

/* App Module */

var dark = angular.module('dark', [ 'ngRoute', 'darkControllers',
		'cardsServices', 'setsServices', 'artistsServices', 'cardinstanceServices', 'artistinstanceServices' ]);

dark.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/cards', {
		templateUrl : '../static/templates/cards.html',
		controller : 'CardsController'
	}).when('/cards/:card_id', {
		templateUrl : '../static/templates/cardinstance.html',
		controller : 'CardInstanceController'
	}).when('/artists/:artist_id', {
		templateUrl : '../static/templates/artistinstance.html',
		controller : 'ArtistInstanceController'
	}).when('/sets', {
		templateUrl : '../static/templates/sets.html',
		controller : 'SetsController'
	}).when('/artists', {
		templateUrl : '../static/templates/artists.html',
		controller : 'ArtistsController'
	}).when('/about', {
		templateUrl : '../static/templates/about.html',
		controller : 'AboutController'
	}).when('/tests',{
		templateUrl : '../static/templates/tests.html',
		controller : 'TestsController'
	}).otherwise({
		templateUrl : '../static/templates/home.html',
		controller : 'HomeController'
	})
} ]);