'use strict';

/* Controllers */

var darkControllers = angular.module('darkDirectives', []);

//#################################################
//#############artists Directive#####################
//#################################################

dark.directive('ArtistDirective', function()){
	return {
		restrict: 'E',
		link: function(scope, element, attrs){
			scope.getContentUrl = function(){
				return '#/artists/' + attrs.ver + '.html';
			}
		},
		template: '<div ng-include"=getContentUrl()"></div>'
	}
};