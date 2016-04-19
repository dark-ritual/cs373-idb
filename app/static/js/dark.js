'use strict';

/* App Module */

var dark = angular.module('dark', [ 'ngRoute', 'ngSanitize', 'slick', 'darkControllers', 'cardsServices', 'setsServices', 'artistsServices', 'cardinstanceServices', 'artistinstanceServices', 'setinstanceServices', 'searchServices', 'angularUtils.directives.dirPagination' ]);

dark.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/results/:q', {
		templateUrl : '../static/templates/results.html',
		controller : 'ResultsController'
	}).when('/cards', {
		templateUrl : '../static/templates/cards.html',
		controller : 'CardsController'
	}).when('/cards/:card_id', {
		templateUrl : '../static/templates/cardinstance.html',
		controller : 'CardInstanceController'
	}).when('/artists/:artist_id', {
		templateUrl : '../static/templates/artistinstance.html',
		controller : 'ArtistInstanceController'
	}).when('/sets/:set_id', {
		templateUrl : '../static/templates/setinstance.html',
		controller : 'SetInstanceController'
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