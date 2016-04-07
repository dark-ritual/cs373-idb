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
	$scope.tableHeaders = [{label: "Card", sortType:"card"}, {label: "Set", sortType:"set"}, {label: "Artist", sortType:"artist"}, {label: "Type", sortType:"type"}, {label: "Rarity", sortType:"rarity"}, {label: "Cost", sortType:"cost"}];

	
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
	$scope.cards = [
	                /*
	                 * {
		    "types": "['creature']",
		    "cmc": 2,
		    "name": "Advance Scout",
		    "formats": "{'vintage': 'legal', 'legacy': 'legal', 'commander': 'legal'}",
		    "card_id": "advance-scout",
		    "subtypes": "['human', 'scout', 'soldier']",
		    "cost": "{1}{W}",
		    "text": "First strike\n{W}: Target creature gains first strike until end of turn.",
		    "colors": "['white']",
		    "toughness": "1",
		    "power": "1"
		  },
		  {
		    "types": "['creature']",
		    "cmc": 4,
		    "name": "Advanced Hoverguard",
		    "formats": "{'modern': 'legal', 'vintage': 'legal', 'legacy': 'legal', 'commander': 'legal'}",
		    "card_id": "advanced-hoverguard",
		    "subtypes": "['drone']",
		    "cost": "{3}{U}",
		    "text": "Flying\n{U}: Advanced Hoverguard gains shroud until end of turn. (It can't be the target of spells or abilities.)",
		    "colors": "['blue']",
		    "toughness": "2",
		    "power": "2"
		  },
		  {
		    "types": "['conspiracy']",
		    "cmc": 0,
		    "name": "Advantageous Proclamation",
		    "formats": "{}",
		    "card_id": "advantageous-proclamation",
		    "subtypes": null,
		    "cost": "",
		    "text": "(Start the game with this conspiracy face up in the command zone.)\nYour minimum deck size is reduced by five.",
		    "colors": "[]",
		    "toughness": null,
		    "power": null
		  },
	  ];
	for(card in $scope.cards) {
		currentCost = card.cost;
		// TODO: parse currentCost to get a color "type" and a numerical "value" for every color in the string
		newCost = [{type:"white", value:4}];
		card.cost = newCost;
	}
	                 * */
	                { artist: "Steve Argyle", card: "Admonition Angel", set: "WorldWake",  type: "Creature - Angel", rarity: "Uncommon", cost: [{type:"white", value:4}]},
	                { artist: "Jeff A. Manges", card: "Deep Water", set: "The Dark",  type: "Enchantment", rarity: "Mythic", cost: [{type:"anyX", value:3}]},
	                { artist: "Nils Hamm", card: "Mountain", set: "All Sets",  type: "Basic Land", rarity: "Common", cost: [{type:"any0", value:1}]}
	  ];
} ]);

//#################################################
//#############Sets Controller#####################
//#################################################

dark.controller('SetsController', ['$scope', function($scope, Sets) {
	$scope.lastSortType = 'set';
	$scope.sortType     = 'set'; // set the default sort type
	$scope.sortReverse  = false;
	$scope.tableHeaders = [{label: "Set", sortType:"set"}, {label: "Common", sortType:"common"}, {label: "Uncommon", sortType:"uncommon"}, {label: "Rare", sortType:"rare"}, {label: "Mythic", sortType:"mythic"}, {label: "Symbol", sortType:"symbol"}];
	
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
	$scope.sets = [
	                { set: "Steve Argyle", common: 10, uncommon: 5,  rare: 35, mythic: 8746, symbol: [{type:"chaos", value:1}]},
	                { set: "Jeff A. Manges", common: 105, uncommon: 300,  rare: 5466, mythic: 564, symbol: [{type:"untap", value:1}]},
	                { set: "Nils Hamm", common: 100000000000, uncommon: 9000000000000,  rare: 568468465465466, mythic: 5648946513216486, symbol: [{type:"million", value:1}]}
	  ];
} ]);

//#################################################
//#############Artists Controller##################
//#################################################

dark.controller('ArtistsController', ['$scope', function($scope, Artists) {
	$scope.lastSortType = 'artist';
	$scope.sortType     = 'artist'; // set the default sort type
	$scope.sortReverse  = false;
	$scope.tableHeaders = [{label: "Artist", sortType:"artist"}, {label: "Cards", sortType:"cards"}, {label: "Common", sortType:"common"}, {label: "Uncommon", sortType:"uncommon"}, {label: "Rare", sortType:"rare"}, {label: "Mythic", sortType:"mythic"}];
	
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
	$scope.artists = [
	                  { artist: "Steve Argyle", cards: 65484, common: 13215,  uncommon: 1, rare: 3, mythic: 2},
	                  { artist: "Jeff A. Manges", cards: 897465, common: 2,  uncommon: 2, rare: 2, mythic: 1},
	                  { artist: "Nils Hamm", cards: 1, common: 231365165,  uncommon: 3, rare: 1, mythic: 3}
	    ];
} ]);

//#################################################
//#############Card Instance Controller#####################
//#################################################

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