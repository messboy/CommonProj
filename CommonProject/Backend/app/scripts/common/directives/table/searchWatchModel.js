'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('demoTable', function () {
	    return {
	        templateUrl: 'Scripts/app/scripts/common/directives/table/table.html',
	        restrict: 'E',
	        replace: true,
	    }
	});


