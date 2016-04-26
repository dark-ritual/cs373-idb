'use strict';

/* Controllers */

var darkControllers = angular.module('darkControllers', []);

// #################################################
// #############Home Controller#####################
// #################################################

dark.controller('HomeController', ['$scope', function($scope) {} ]);

// #################################################
// #############About Controller####################
// #################################################

dark.controller('AboutController', ['$scope', function($scope) {} ]);

// #################################################
// #############NavBar Controller###################
// #################################################

dark.controller('ActiveNavBarController', [ '$scope', '$location', function($scope, $location) {
	$scope.isActive = function(viewLocation) {
		return viewLocation === $location.path();
	};
} ]);

// #################################################
// #############NavSearch Controller################
// #################################################

dark.controller('SearchController', [ '$scope', '$location', function($scope, $location) {
	$scope.searchInput = "";
	$scope.search = function() {
		$location.path("/results/" + $scope.searchInput + "/0");
	}
} ]);

// #################################################
// #############Results Controller##################
// #################################################

dark.controller('ResultsController', [ '$scope','$routeParams', 'NavSearch', 'costIcon', function($scope, $routeParams, NavSearch, costIcon) {
	$scope.lastSortType = 'card';
	$scope.sortType 	  = 'card';
	$scope.sortReverse  = false;
	$scope.tableHeaders = [{label: "", sortType:""}, {label: "Card", sortType:"name"}, {label: "Artist(s)", sortType:"artists"}, {label: "Set(s)", sortType:"sets"}, {label: "Text", sortType:"text"}, {label: "Rarity", sortType:"rarities"}, {label: "Cost", sortType:"cost"}];
	$scope.cards = NavSearch.query($routeParams, function(data) {
		for(var i = 0; i < data.length; i++) {
			data[i].text = costIcon.cardTextParse(data[i].text);
		}
	});
	$scope.page_num = parseInt($routeParams["page_num"]);
	$scope.search_query = $routeParams["search_query"]
	
	$scope.sort = function(tableHeader) {
		$scope.sortType = tableHeader.sortType;
		if($scope.sortType == $scope.lastSortType) {
			$scope.sortReverse = !$scope.sortReverse;
		} else {
			$scope.lastSortType = $scope.sortType;
		}
	}

	$scope.convertCost = costIcon.costString;
}]);


// #################################################
// #############Cards Controller####################
// #################################################

dark.controller('CardsController', ['$scope','Cards', 'costIcon', '$routeParams', function($scope, Cards, costIcon, $routeParams) {
	$scope.lastSortType = 'card';
	$scope.sortType     = 'card'; // set the default sort type
	$scope.sortReverse  = false;
	$scope.tableHeaders = [
		{label: "Card", sortType:"card_id", column: 0}, 
		{label: "Artist(s)", sortType:"artist_id", column: 1}, 
		{label: "Set(s)", sortType:"set_id", column: 2}, 
		{label: "Edition(s)", sortType:"editions", column: 3}, 
		{label: "Rarity", sortType:"rarity", column: 4}, 
		{label: "Cost", sortType:"cost"}
	];
	
	$scope.splitString = function(s, char){
		var array = s.split(char);
		return array;
	}
	
	$scope.convertCost = costIcon.costString;

	// create the list of entries
	$scope.cards = Cards.query($routeParams);
	$scope.page_num = parseInt($routeParams["page_num"]);
	$scope.sort_col = parseInt($routeParams["sort_col"]);

} ]);

// #################################################
// #############Sets Controller#####################
// #################################################

dark.controller('SetsController', ['$scope', '$routeParams', 'Sets', function($scope, $routeParams, Sets) {
	$scope.lastSortType = 'set';
	$scope.sortType     = 'set'; // set the default sort type
	$scope.sortReverse  = false;
	$scope.tableHeaders = [
		{label: "Set", sortType:"name", column:0},  
		{label: "Common", sortType:"commons", column:1}, 
		{label: "Uncommon", sortType:"uncommons", column:2}, 
		{label: "Rare", sortType:"rares", column:3}, 
		{label: "Mythic", sortType:"mythics", column:4}, 
		{label: "Total", sortType:"total", column:5}
	];

	// create the list of entries
	$scope.sets = Sets.query($routeParams);
	$scope.page_num = parseInt($routeParams["page_num"])
	$scope.sort_col = parseInt($routeParams["sort_col"]);
} ]);

// #################################################
// #############Artists Controller##################
// #################################################

dark.controller('ArtistsController', ['$scope', '$routeParams', 'Artists', function($scope, $routeParams, Artists) {
	$scope.lastSortType = 'artist';
	$scope.sortType     = 'artist'; // set the default sort type
	$scope.sortReverse  = false;
	$scope.tableHeaders = [
		{label: "Artist", sortType:"name", column:0}, 
		{label: "Total", sortType:"total", column:1}, 
		{label: "Common", sortType:"commons", column:2}, 
		{label: "Uncommon", sortType:"uncommons", column:3}, 
		{label: "Rare", sortType:"rares", column:4}, 
		{label: "Mythic", sortType:"mythics", column:5}
	];

	$scope.splitString = function(s, char, trim){
		var array = s.split(char);
		return array;
	}

	// create the list of entries
	$scope.artists = Artists.query($routeParams);
	$scope.page_num = parseInt($routeParams["page_num"]);
	$scope.sort_col = parseInt($routeParams["sort_col"]);
} ]);

// #################################################
// ##########Card Instance Controller###############
// #################################################

dark.controller('CardInstanceController', ['$scope', '$routeParams', 'CardInstance', 'costIcon', function($scope, $routeParams, CardInstance, costIcon) {

	$scope.cardinstance = CardInstance.query($routeParams, function(data){ // Massage the data before it gets put into the template
		// turn types from json string to array
		data[0].types = angular.fromJson(data[0].types.replace(/\'/g,"\""));
		// if we have subtypes
		if (data[0].subtypes !== null) {
			// turn subtypes from json string to array
			data[0].subtypes = angular.fromJson(data[0].subtypes.replace(/\'/g,"\""));
			// make new array that holds all the types+subtypes
			data[0].alltypes = data[0].types.concat(data[0].subtypes);
		}
		// we don't have subtypes
		else {
			// all types are just types
			data[0].alltypes = data[0].types;
		}
		
		data[0].text = costIcon.cardTextParse(data[0].text);
	});

	$scope.convertCost = costIcon.costString;
} ]);

// ####################################################
// ##########Artists Instance Controller###############
// ####################################################

dark.controller('ArtistInstanceController', ['$scope',  '$routeParams', 'ArtistInstance', function($scope, $routeParams, ArtistInstance) {

	$scope.tableHeaders = [{label: "Card", sortType:"name"}, {label: "Information", sortType: "name"}, {label: "Set", sortType:"set"}];

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
	$scope.artistinstances = ArtistInstance.query($routeParams);

} ]);

// ####################################################
// #############Set Instance Controller################
// ####################################################

dark.controller('SetInstanceController', ['$scope',  '$routeParams', 'SetInstance', function($scope, $routeParams, SetInstance) {

    $scope.tableHeaders = [{label: "Card", sortType: "name"}, {label: "Information", sortType: "name"}, {label: "Artist", sortType:"artist"}];

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
    $scope.setinstances = SetInstance.query($routeParams)

} ]);

// ###############################################
// #############Tests Controller##################
// ###############################################

darkControllers.controller('TestsController', function($scope, $http, $location) {
	$scope.result = "Click below to run tests (may take a few moments)."

	$scope.runtests = function() {
		$http.get('/tests/runtests')
		.then(function (response) {
			var txt = document.createElement("textarea");
			txt.innerHTML = response.data;
			var text = txt.value;
			$scope.result = txt.value;
	   })
	}
} );

//###############################################
//#############Scroll Controller#################
//###############################################

darkControllers.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
function ($scope, $location, $anchorScroll) {
  $scope.gotoTop = function() {
    // set the location.hash to the id of
    // the element you wish to scroll to.
    $location.hash('top');

    // call $anchorScroll()
    $anchorScroll();
  };
}]);

// ##############################################
// ################Vas Controller################
// ##############################################

dark.controller('VasController', ['$scope',  '$routeParams', 'Vas', function($scope, $routeParams, Vas) {

	// // create the list of entries
	// $routeParams.query = "states";
	// $scope.states = Vas.query($routeParams);
	// $routeParams.query = "cities";
	// $scope.cities = "hello"
	// $routeParams.query = "neighborhoods";
	// $scope.neighborhoods = Vas.query($routeParams);


	$scope.scripts = [];
	$scope.scripts.push({src:'../static/js/uStates.js'});
	$scope.scripts.push({src:'../static/js/usmap.js'});


} ]);
