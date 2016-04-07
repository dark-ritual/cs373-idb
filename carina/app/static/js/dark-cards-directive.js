'use strict';

/* Controllers */

var darkControllers = angular.module('darkDirectives', []);

//#################################################
//#############Cards Directive#####################
//#################################################

dark.directive('CardDirective', function()){
	return {
		restrict: 'E',
		link: function(scope, element, attrs){
			scope.getContentUrl = function(){
				return '#/cards/' + attrs.ver + '.html';
			}
		},
		template: '<div ng-include"=getContentUrl()"></div>'
	}
};