'use strict';

/* Controllers */

var darkControllers = angular.module('darkControllers', []);

dark.controller('HomeController', ['$scope', function($scope, Home) {

} ]);

dark.controller('CardsController', ['$scope','Cards', function($scope, Cards) {
	$scope.cards = Cards.query();
} ]);

dark.controller('SetsController', ['$scope', function($scope, Sets) {
	$scope.sets = Sets.query();

} ]);

dark.controller('ArtistsController', ['$scope', function($scope, Artists) {
	$scope.sortType     = 'Artist'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	
	// create the list of entries
	$scope.artists = [
	                { artist: "Steve Argyle", card: "Admonition Angel", set: "WorldWake",  type: "Creature - Angel", cmc: 6, cost: 6},
	                { artist: "Jeff A. Manges", card: "Deep Water", set: "The Dark",  type: "Enchantment", cmc: 0, cost: 0},
	                { artist: "Nils Hamm", card: "Mountain", set: "All Sets",  type: "Basic Land", cmc: 0, cost: 0}
	  ];
} ]);
