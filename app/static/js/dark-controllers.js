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

dark.controller('AboutController', ['$scope', function($scope) {

	
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
		imageUrl : "../static/images/JavierV1.0.png"
	}, {
		name : "2",
		imageUrl : "../static/images/ShanellV1.0.png"
	}, {
		name : "3",
		imageUrl : "../static/images/PeterV1.0.png"
	}, {
		name : "4",
		imageUrl : "../static/images/StephanieV1.0.png"
	}, {
		name : "5",
		imageUrl : "../static/images/MarkV1.0.png"
	}, {
		name : "6",
		imageUrl : "../static/images/TonyaV1.0.png"
	} ]



} ]);

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
	$scope.cards = NavSearch.query($routeParams);
	$scope.page_num = parseInt($routeParams["page_num"]);
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

	$scope.convertCost = costIcon;
}]);


// #################################################
// #############Cards Controller####################
// #################################################

dark.controller('CardsController', ['$scope','Cards', 'costIcon', '$routeParams', function($scope, Cards, costIcon, $routeParams) {
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
	
	$scope.convertCost = costIcon;
	
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

// #################################################
// #############Sets Controller#####################
// #################################################

dark.controller('SetsController', ['$scope', '$routeParams', 'Sets', function($scope, $routeParams, Sets) {
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
	$scope.sets = Sets.query($routeParams);
	$scope.page_num = parseInt($routeParams["page_num"])
} ]);

// #################################################
// #############Artists Controller##################
// #################################################

dark.controller('ArtistsController', ['$scope', '$routeParams', 'Artists', function($scope, $routeParams, Artists) {
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
	$scope.artists = Artists.query($routeParams);
	$scope.page_num = parseInt($routeParams["page_num"])
} ]);

// ##########################################################
// #############Card Instance Controller#####################
// ##########################################################

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
		// parse the text for a card and inject <div> for color icons
		var textArray = data[0].text.split(" ");
		for(var i=0;i<textArray.length;i++) {
			if(textArray[i].includes('{') && textArray[i].includes('}')) {
				var start = textArray[i].indexOf('{');
				var end = textArray[i].lastIndexOf('}');
				var colors = textArray[i].substring(start,end+1);
				var cssColors = costIcon(colors);
				for(var j=0;j<cssColors.length;j++) {
					cssColors[j] = "<div class=\"" + cssColors[j] + " mtg-text-icon\"></div>";
				}
				textArray[i] = textArray[i].substring(0,start) + cssColors.join("") + textArray[i].substring(end+1,textArray[i].length);
			}
		}
		data[0].text = textArray.join(" ");
	});
	
	$scope.cardTypes = function(typeString, subtypeString){
	}

	$scope.convertCost = costIcon;
} ]);

// ##########################################################
// #############Artists Instance Controller##################
// ##########################################################

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

// #######################################################
// #############Set Instance Controller##################
// #######################################################

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
			$scope.result = txt.value;// .substring(2,text.length -
										// 1).replace(/\\n/g, "<br>");
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

