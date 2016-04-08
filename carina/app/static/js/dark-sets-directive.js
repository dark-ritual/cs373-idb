'use strict';

/* Controllers */

var darkControllers = angular.module('darkDirectives', []);

//#################################################
//#############Sets Directive######################
//#################################################

dark.directive('SetDirective', function()){
	return {
		restrict: 'E',
		link: function(scope, element, attrs){
			scope.getContentUrl = function(){
				return '#/sets/' + attrs.ver + '.html';
			}
		},
		template: '<div ng-include"=getContentUrl()"></div>'
	}
};
