'use strict';

/* Controllers */

var darkControllers = angular.module('darkControllers', []);

//#################################################
//#############Home Controller#####################
//#################################################

dark.controller('HomeController', ['$scope', function($scope) {

} ]);

//#################################################
//#############About Controller####################
//#################################################

dark.controller('AboutController', ['$scope', function($scope) {

} ]);

//#################################################
//#############NavBar Controller###################
//#################################################

dark.controller('ActiveNavBarController', [ '$scope', '$location', function($scope, $location) {
	$scope.isActive = function(viewLocation) {
		return viewLocation === $location.path();
	};
} ]);

//#################################################
//#############Cards Controller####################
//#################################################

dark.controller('CardsController', ['$scope','Cards', function($scope, Cards) {
	$scope.lastSortType = 'card';
	$scope.sortType     = 'card'; // set the default sort type
	$scope.sortReverse  = false;
	$scope.tableHeaders = [{label: "Card", sortType:"name"}, {label: "Artist(s)", sortType:"artists"}, {label: "Set(s)", sortType:"sets"}, {label: "Edition(s)", sortType:"editions"}, {label: "Rarity", sortType:"rarities"}, {label: "Cost", sortType:"cost"}];

	
	/*$scope.range = function(start, end)
	{
	    var array = new Array();
	    for(var i = start; i < end; i++)
	    {
	        array.push(i);
	    }
	    return array;
	}*/
	
	$scope.sort = function(tableHeader) {
		$scope.sortType = tableHeader.sortType;
		if($scope.sortType == $scope.lastSortType) {
			$scope.sortReverse = !$scope.sortReverse;
		} else {
			$scope.lastSortType = $scope.sortType;
		}
	}
	
	// create the list of entries
	$scope.cards = Cards.query();
	                
	/*for(card in $scope.cards) {
		currentCost = card.cost;
		// TODO: parse currentCost to get a color "type" and a numerical "value" for every color in the string
		newCost = [{type:"white", value:4}];
		card.cost = newCost;
	}*/
} ]);

//#################################################
//#############Sets Controller#####################
//#################################################

dark.controller('SetsController', ['$scope', 'Sets', function($scope, Sets) {
	$scope.lastSortType = 'set';
	$scope.sortType     = 'set'; // set the default sort type
	$scope.sortReverse  = false;
	$scope.tableHeaders = [{label: "Set", sortType:"name"}, {label: "Common", sortType:"commons"}, {label: "Uncommon", sortType:"uncommons"}, {label: "Rare", sortType:"rares"}, {label: "Mythic", sortType:"mythics"}, {label: "Total", sortType:"total"}];
	
	$scope.sort = function(tableHeader) {
		$scope.sortType = tableHeader.sortType;
		if($scope.sortType == $scope.lastSortType) {
			$scope.sortReverse = !$scope.sortReverse;
		} else {
			$scope.lastSortType = $scope.sortType;
		}
	}
	
	// create the list of entries
	$scope.sets = Sets.query();
} ]);

//#################################################
//#############Artists Controller##################
//#################################################

dark.controller('ArtistsController', ['$scope', 'Artists', function($scope, Artists) {
	$scope.lastSortType = 'artist';
	$scope.sortType     = 'artist'; // set the default sort type
	$scope.sortReverse  = false;
	$scope.tableHeaders = [{label: "Artist", sortType:"name"}, {label: "Total", sortType:"total"}, {label: "Common", sortType:"commons"}, {label: "Uncommons", sortType:"uncommons"}, {label: "Rare", sortType:"rares"}, {label: "Mythic", sortType:"mythics"}];
	
	$scope.sort = function(tableHeader) {
		$scope.sortType = tableHeader.sortType;
		if($scope.sortType == $scope.lastSortType) {
			$scope.sortReverse = !$scope.sortReverse;
		} else {
			$scope.lastSortType = $scope.sortType;
		}
	}
	
	// create the list of entries
	$scope.artists = Artists.query();
} ]);

//##########################################################
//#############Card Instance Controller#####################
//##########################################################

dark.controller('CardInstanceController', ['$scope', function($scope, CardInstance) {

	$scope.name = "Admonition Angel";
	$scope.artist = "Steve Argyle";
	$scope.sets = "Worldwake";
	$scope.type = "Creature-Angel";
	$scope.cmc = "6";
	$scope.text = "Maybe included?";
	$scope.pt = "6/6";
	$scope.rarity = "Mythic Rare";

} ]);

//##########################################################
//#############Artists Instance Controller##################
//##########################################################

dark.controller('ArtistsInstanceController', ['$scope', function($scope, ArtistsInstance) {
	$scope.lastSortType = '';
	$scope.sortType     = ''; // set the default sort type
	$scope.sortReverse  = false;
	$scope.tableHeaders = [{label: "Card"}, {label: "Information"}, {label: "Sets", sortType:"sets"}];
	
	$scope.range = function(start, end)
	{
	    var array = new Array();
	    for(var i = start; i < end; i++)
	    {
	        array.push(i);
	    }
	    return array;
	}
	
	$scope.sort = function(tableHeader) {
		$scope.sortType = tableHeader.sortType;
		if($scope.sortType == $scope.lastSortType) {
			$scope.sortReverse = !$scope.sortReverse;
		} else {
			$scope.lastSortType = $scope.sortType;
		}
	}
	
	// create the list of entries
	$scope.artistsinstance = [
	                  { image: "../static/images/imagename", name: "Admonition Angel", artist:"Steve Argyle", type:"Creature - Flying", text:"Landfall — Whenever a land enters the battlefield under your control, you may exile target nonland permanent other than Admonition Angel.\nWhen Admonition Angel leaves the battlefield, return all cards exiled with it to the battlefield under their owners' control.", sets: "WorldWake"},
	                  { image: "../static/images/imagename", text: "Angelic Arbiter...\nText to\nfill in.", sets: "Magic: The Gathering-Commander"},
	    ];

	$scope.artist = "Steve Argyle";
} ]);

//#######################################################
//#############Sets Instance Controller##################
//#######################################################

dark.controller('SetsInstanceController', ['$scope', function($scope, SetsInstance) {
	$scope.lastSortType = 'sets';
	$scope.sortType     = 'sets'; // set the default sort type
	$scope.sortReverse  = false;
	$scope.tableHeaders = [{label: "Card"}, {label: "Information"}, {label: "Sets", sortType:"sets"}];
	
	$scope.range = function(start, end)
	{
	    var array = new Array();
	    for(var i = start; i < end; i++)
	    {
	        array.push(i);
	    }
	    return array;
	}
	
	$scope.sort = function(tableHeader) {
		$scope.sortType = tableHeader.sortType;
		if($scope.sortType == $scope.lastSortType) {
			$scope.sortReverse = !$scope.sortReverse;
		} else {
			$scope.lastSortType = $scope.sortType;
		}
	}
	
	// create the list of entries
	$scope.setsinstance = [
	                  { image: "../static/images/imagename", name: "Admonition Angel", artist:"Steve Argyle", type:"Creature - Flying", text:"Landfall — Whenever a land enters the battlefield under your control, you may exile target nonland permanent other than Admonition Angel.\nWhen Admonition Angel leaves the battlefield, return all cards exiled with it to the battlefield under their owners' control.", sets: "WorldWake"},
	                  { image: "../static/images/imagename", name: "Angelic Arbiter", artist: "Text to fill in...", sets: "Magic: The Gathering-Commander"},
	    ];

	$scope.set = "Worldwake";
} ]);