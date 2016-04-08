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

	$scope.range = function(start, end)
	{
	    var array = new Array();
	    for(var i = start; i < end; i++)
	    {
	        array.push(i);
	    }
	    return array;
	}
	
	$scope.splitString = function(s, char){
		var array = s.split(char);
		return array;
	}
	
	$scope.convertCost = function(costString){
		costString = costString.replace(new RegExp("{","g"), '');
		var array = costString.split("}");
		for(var i=0;i<array.length;i++) {
			if(array[i]=="U"){
				array[i]="mtg-blue";
			} else if(array[i]=="B"){
				array[i]="mtg-black";
			} else if(array[i]=="W"){
				array[i]="mtg-white";
			} else if(array[i]=="R"){
				array[i]="mtg-red";
			} else if(array[i]=="G"){
				array[i]="mtg-green";
			} else if(array[i]=="W/U") {
				array[i]="mtg-white-blue";
			} else {
				if(array[i].length > 0) {
					if(array[i].indexOf("/") > -1) {
						if(array[i]=="2/U") {
							array[i]="mtg-any2-blue";
						}  
					} else {
						array[i]="mtg-any"+array[i];
					}
				}
			}
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

	$scope.count = function(a){
		return a.length;
	}

	$scope.trim = function(a){
		return s[1];
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

	$scope.splitString = function(string){
		var array = string.split(',');
		return array;
	}

	$scope.count = function(a){
		return a.length;
	}

	$scope.trim = function(a){
		return s[1];
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
	$scope.tableHeaders = [{label: "Artist", sortType:"name"}, {label: "Total", sortType:"total"}, {label: "Common", sortType:"commons"}, {label: "Uncommon", sortType:"uncommons"}, {label: "Rare", sortType:"rares"}, {label: "Mythic", sortType:"mythics"}];

	$scope.range = function(start, end)
	{
	    var array = new Array();
	    for(var i = start; i < end; i++)
	    {
	        array.push(i);
	    }
	    return array;
	}

	$scope.splitString = function(s, char, trim){
		var array = s.split(char);
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

	$scope.count = function(a){
		return a.length;
	}

	$scope.trim = function(a){
		return s[1];
	}

	// create the list of entries
	$scope.artists = Artists.query();
} ]);

//##########################################################
//#############Card Instance Controller#####################
//##########################################################

dark.controller('CardInstanceController', ['$scope', '$routeParams', 'CardInstance', function($scope, $routeParams, CardInstance) {

	$scope.cardinstance = CardInstance.query($routeParams)

} ]);

//##########################################################
//#############Artists Instance Controller##################
//##########################################################

dark.controller('ArtistInstanceController', ['$scope',  '$routeParams', 'ArtistInstance', function($scope, $routeParams, ArtistInstance) {

	$scope.tableHeaders = [{label: "Card"}, {label: "Information"}, {label: "Set", sortType:"sets"}];

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

	//$scope.getName = function(card_id){
	//	return CardInstance.query(card_id).name;
	//}
} ]);

//#######################################################
//#############Set Instance Controller##################
//#######################################################

dark.controller('SetInstanceController', ['$scope',  '$routeParams', 'SetInstance', function($scope, $routeParams, SetInstance) {

    $scope.tableHeaders = [{label: "Card"}, {label: "Information"}, {label: "Artist"}];

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
/*	$scope.setsinstance = [
	                  { image: "../static/images/imagename", name: "Admonition Angel", artist:"Steve Argyle", type:"Creature - Flying", text:"Landfall — Whenever a land enters the battlefield under your control, you may exile target nonland permanent other than Admonition Angel.\nWhen Admonition Angel leaves the battlefield, return all cards exiled with it to the battlefield under their owners' control.", sets: "WorldWake"},
	                  { image: "../static/images/imagename", name: "Angelic Arbiter", artist: "Text to fill in...", sets: "Magic: The Gathering-Commander"},
	    ];
*/

	//$scope.set = "Worldwake";
} ]);

//###############################################
//#############Tests Controller##################
//###############################################

darkControllers.controller('TestsController', function($scope, $http, $location) {
	$scope.result = "Click below to run tests (may take a few moments)."

	$scope.runtests = function() {
		$http.get('/tests/runtests')
		.then(function (response) {
			var txt = document.createElement("textarea");
			txt.innerHTML = response.data;
			var text = txt.value;
			$scope.result = txt.value;//.substring(2,text.length - 1).replace(/\\n/g, "<br>");
	   })
	}
} );
