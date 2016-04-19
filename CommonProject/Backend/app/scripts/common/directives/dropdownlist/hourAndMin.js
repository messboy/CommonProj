(function () {
    'use strict';
    angular.module('sbAdminApp')
	.directive('ddlHourMin', function () {
	    return {
	        templateUrl: 'app/scripts/common/directives/dropdownlist/hourAndMin.html',
	        restrict: 'E',
	        scope: {
	            selectHour: '=',
	            selectMin: '='
	        },
	        link: function (scope, elem, attrs) {
	            var hours = [];
	            var mins = [];

	            for (var i = 1; i <= 24; i++) {
	                hours.push(i.toString());
	            }

	            for (var i = 0; i < 60; i++) {
	                mins.push(i.toString());
	            }

	            scope.Hour = hours;
	            scope.Min = mins;
	        }
	    };
	})
})()