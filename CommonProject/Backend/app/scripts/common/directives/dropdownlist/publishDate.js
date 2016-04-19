(function () {
    'use strict';
    angular.module('sbAdminApp')
	.directive('ddlPublishDate', function () {
	    return {
	        templateUrl: 'app/scripts/common/directives/dropdownlist/publishDate.html',
	        restrict: 'E',
	        scope: {
	            selectHour: '=',
	            selectMin: '='
	        },
	        link: function (scope, elem, attrs) {
	            var years = [];
	            var months = [];
	            var d = new Date();
	            var n = d.getFullYear();

	            for (var i = n; i >= 1985; i--) {
	                years.push(i.toString());
	            }

	            for (var i = 1; i < 13; i++) {
	                months.push(i.toString());
	            }

	            scope.Year = years;
	            scope.Month = months;
	        }
	    };
	})
})()