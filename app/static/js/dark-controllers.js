'use strict';

/* Controllers */

var darkControllers = angular.module('darkControllers', []);

//#################################################
//#############Home Controller#####################
//#################################################

dark.controller('HomeController', ['$scope', function($scope) {
	
	$('.center').slick({
		centerMode : true,
		centerPadding : '60px',
		slidesToShow : 3,
		autoplay : true,
		autoplaySpeed : 2000,
		responsive : [ {
			breakpoint : 768,
			settings : {
				arrows : false,
				centerMode : true,
				centerPadding : '40px',
				slidesToShow : 3
			}
		}, {
			breakpoint : 480,
			settings : {
				arrows : false,
				centerMode : true,
				centerPadding : '40px',
				slidesToShow : 1
			}
		} ]
	});
	
	$scope.carouselOptions = [ {
		name : "1",
		imageUrl : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386731&type=card"
	}, {
		name : "2",
		imageUrl : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=19733&type=card"
	}, {
		name : "3",
		imageUrl : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=201141&type=card"
	}, {
		name : "4",
		imageUrl : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=184622&type=card"
	}, {
		name : "5",
		imageUrl : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=243215&type=card"
	}, {
		name : "6",
		imageUrl : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=391928&type=card"
	}, {
		name : "7",
		imageUrl : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=394699&type=card"
	}, {
		name : "8",
		imageUrl : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=407555&type=card"
	}, {
		name : "9",
		imageUrl : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=394570&type=card"
	}, {
		name : "10",
		imageUrl : "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=271213&type=card"
	} ]

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
//#############NavSearch Controller###################
//#################################################

dark.controller('SearchController', [ '$scope', '$location', function($scope, $location) {
	$scope.searchInput = "";
	$scope.search = function() {
		$location.path("/results/" + $scope.searchInput);
	}
} ]);

//#################################################
//#############Results Controller###################
//#################################################

dark.controller('ResultsController', [ '$scope','$routeParams', 'NavSearch', function($scope, $routeParams, NavSearch) {
	$scope.lastSortType = 'card';
	$scope.sortType 	  = 'card';
	$scope.sortReverse  = false;
	$scope.tableHeaders = [{label: "", sortType:""}, {label: "Card", sortType:"name"}, {label: "Artist(s)", sortType:"artists"}, {label: "Set(s)", sortType:"sets"}, {label: "Text", sortType:"text"}, {label: "Rarity", sortType:"rarities"}, {label: "Cost", sortType:"cost"}]
	$scope.cards = NavSearch.query($routeParams);
	// debugger;
	// $scope.andResults = $scope.cards[0];
	// $scope.orResults = $scope.cards[1];
	
	$scope.sort = function(tableHeader) {
		$scope.sortType = tableHeader.sortType;
		if($scope.sortType == $scope.lastSortType) {
			$scope.sortReverse = !$scope.sortReverse;
		} else {
			$scope.lastSortType = $scope.sortType;
		}
	}

	$scope.convertCost = function(costString){
		if(costString != null){
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
		}
		return array;
	}

} ]);

//#################################################
//#############Cards Controller####################
//#################################################

dark.controller('CardsController', ['$scope', '$routeParams','Cards', function($scope, $routeParams, Cards) {
	$scope.lastSortType = 'card';
	$scope.sortType     = 'card'; // set the default sort type
	$scope.sortReverse  = false;
	$scope.tableHeaders = [{label: "Card", sortType:"name"}, {label: "Artist(s)", sortType:"artists"}, {label: "Set(s)", sortType:"sets"}, {label: "Edition(s)", sortType:"num_editions"}, {label: "Rarity", sortType:"rarities"}, {label: "Cost", sortType:"cost"}];

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
		if(costString != null){
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
	$scope.cards = Cards.query($routeParams);
	$scope.page_num = parseInt($routeParams["page_num"]);
} ]);

//#################################################
//#############Sets Controller#####################
//#################################################

dark.controller('SetsController', ['$scope', 'Sets', function($scope, Sets) {
	$scope.lastSortType = 'set';
	$scope.sortType     = 'set'; // set the default sort type
	$scope.sortReverse  = false;
	$scope.tableHeaders = [{label: "Set", sortType:"name"},  {label: "Common", sortType:"commons"}, {label: "Uncommon", sortType:"uncommons"}, {label: "Rare", sortType:"rares"}, {label: "Mythic", sortType:"mythics"}, {label: "Total", sortType:"total"}];

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

	$scope.convertCost = function(costString){
		if(costString != null){
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
		}
		return array;
	}
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
