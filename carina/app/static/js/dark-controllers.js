'use strict';

/* Controllers */

var darkControllers = angular.module('darkControllers', []);

dark.controller('HomeController', ['$scope', function($scope, Home) {

} ]);

dark.controller('CardsController', ['$scope','Cards', function($scope, Cards) {
	$scope.sortType     = 'Card'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	
	$scope.range = function(start, end)
	{
	    var array = new Array();
	    for(var i = start; i < end; i++)
	    {
	        array.push(i);
	    }
	    return array;
	}
	
	// create the list of entries
	$scope.cards = [
	                { artist: "Steve Argyle", card: "Admonition Angel", set: "WorldWake",  type: "Creature - Angel", cmc: 6, cost: [{type:"any6", value:1}, {type:"white", value:1}, {type:"blue", value:1}, {type:"chaos", value:1}, {type:"hundred", value:1}, {type:"slash", value:1}]},
	                { artist: "Jeff A. Manges", card: "Deep Water", set: "The Dark",  type: "Enchantment", cmc: 0, cost: [{type:"any9", value:1}, {type:"anyX", value:1}, {type:"untap", value:1}, {type:"snow", value:1}, {type:"green-blue", value:1}, {type:"any2-green", value:1}]},
	                { artist: "Nils Hamm", card: "Mountain", set: "All Sets",  type: "Basic Land", cmc: 0, cost: [{type:"any12", value:1}, {type:"white-black", value:1}, {type:"tapA", value:1}, {type:"infinity", value:1}, {type:"million", value:1}, {type:"phyrexia", value:1}]}
	  ];
} ]);

dark.controller('SetsController', ['$scope', function($scope, Sets) {
	$scope.sortType     = 'Set'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	
	$scope.range = function(start, end)
	{
	    var array = new Array();
	    for(var i = start; i < end; i++)
	    {
	        array.push(i);
	    }
	    return array;
	}
	
	// create the list of entries
	$scope.sets = [
	                { artist: "Steve Argyle", card: "Admonition Angel", set: "WorldWake",  type: "Creature - Angel", cmc: 6, cost: [{type:"any", value:6}, {type:"white", value:4}, {type:"blue", value:0}, {type:"green", value:0}, {type:"red", value:0}, {type:"black", value:0}]},
	                { artist: "Jeff A. Manges", card: "Deep Water", set: "The Dark",  type: "Enchantment", cmc: 0, cost: [{type:"any", value:6}, {type:"white", value:2}, {type:"blue", value:0}, {type:"green", value:0}, {type:"red", value:0}, {type:"black", value:0}]},
	                { artist: "Nils Hamm", card: "Mountain", set: "All Sets",  type: "Basic Land", cmc: 0, cost: [{type:"any", value:6}, {type:"white", value:1}, {type:"blue", value:0}, {type:"green", value:0}, {type:"red", value:0}, {type:"black", value:0}]}
	  ];

} ]);

dark.controller('ArtistsController', ['$scope', function($scope, Artists) {
	$scope.sortType     = 'Artist'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	
	$scope.range = function(start, end)
	{
	    var array = new Array();
	    for(var i = start; i < end; i++)
	    {
	        array.push(i);
	    }
	    return array;
	}
	
	// create the list of entries
	$scope.artists = [
	                { artist: "Steve Argyle", card: "Admonition Angel", set: "WorldWake",  type: "Creature - Angel", cmc: 6, cost: [{type:"any", value:6}, {type:"white", value:4}, {type:"blue", value:0}, {type:"green", value:0}, {type:"red", value:0}, {type:"black", value:0}]},
	                { artist: "Jeff A. Manges", card: "Deep Water", set: "The Dark",  type: "Enchantment", cmc: 0, cost: [{type:"any", value:6}, {type:"white", value:2}, {type:"blue", value:0}, {type:"green", value:0}, {type:"red", value:0}, {type:"black", value:0}]},
	                { artist: "Nils Hamm", card: "Mountain", set: "All Sets",  type: "Basic Land", cmc: 0, cost: [{type:"any", value:6}, {type:"white", value:1}, {type:"blue", value:0}, {type:"green", value:0}, {type:"red", value:0}, {type:"black", value:0}]}
	  ];
} ]);
