'use strict';

/* App Module */

var dark = angular.module('dark', [ 'ngRoute', 'ngSanitize', 'slick', 'darkControllers', 'cardsServices', 'setsServices', 'artistsServices', 'cardinstanceServices', 'artistinstanceServices', 'setinstanceServices', 'searchServices', 'angularUtils.directives.dirPagination' ]);

dark.factory('costIcon', function() {
	return function(costString) {
        if(costString != null && costString !== undefined && costString != "") {
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
                    } else if(array[i]=="W/B"){
                            array[i]="mtg-white-black";
                    } else if(array[i]=="U/B"){
                            array[i]="mtg-blue-black";
                    } else if(array[i]=="U/R"){
                            array[i]="mtg-blue-red";
                    } else if(array[i]=="B/R"){
                            array[i]="mtg-black-red";
                    } else if(array[i]=="B/G"){
                            array[i]="mtg-black-green";
                    } else if(array[i]=="R/W"){
                            array[i]="mtg-red-white";
                    } else if(array[i]=="R/G"){
                            array[i]="mtg-red-green";
                    } else if(array[i]=="G/W"){
                            array[i]="mtg-green-white";
                    } else if(array[i]=="G/U"){
                            array[i]="mtg-green-blue";
                    } else if(array[i]=="R/G"){
                            array[i]="mtg-red-green";
                    } else if(array[i]=="W/U") {
                            array[i]="mtg-white-blue";
                    } else if(array[i].length == 0) {
                    		array.splice(i,1);
                    } else {
                            if(array[i].length > 0) {
                                    if(array[i].indexOf("/") > -1) {
                                            if(array[i]=="2/U") {
                                                    array[i]="mtg-any2-blue";
                                            } else if(array[i]=="2/B") {
                                                    array[i]="mtg-any2-black";
                                            } else if(array[i]=="2/G") {
                                                    array[i]="mtg-any2-green";
                                            } else if(array[i]=="2/R") {
                                                    array[i]="mtg-any2-red";
                                            } else if(array[i]=="2/W") {
                                                    array[i]="mtg-any2-white";
                                            }
                                    } else {
                                            array[i]="mtg-any"+array[i];
                                    }
                            }
                    }
            }

		return array;
	}

};
});

dark.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/results/:search_query/:page_num', {
		templateUrl : '../static/templates/results.html',
		controller : 'ResultsController'
	}).when('/cards/page/:page_num/:sort_col', {
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
	}).when('/sets/page/:page_num/:sort_col', {
		templateUrl : '../static/templates/sets.html',
		controller : 'SetsController'
	}).when('/artists/page/:page_num/:sort_col', {
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