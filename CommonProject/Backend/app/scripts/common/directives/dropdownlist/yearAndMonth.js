(function () {
    'use strict';
    angular.module('sbAdminApp')
	.directive('ddlYearMonth', function () {
	    return {
	        templateUrl: 'app/scripts/common/directives/dropdownlist/yearAndMonth.html',
	        restrict: 'E',
	        scope: {
	            selectYear: '=',
	            selectMonth: '='
	        },
	        link: function (scope, elem, attrs) {
	            var year = [];
	            var month = [];

	            for (var i = 2015; i <= 2030; i++) {
	                year.push({
	                    key: i.toString(),
	                    val: i.toString() + "年"
	                });
	            }

	            for (var i = 1; i <= 12; i++) {
	                month.push({
	                    key: i.toString(),
	                    val: i.toString() + "月"
	                });
	            }

	            scope.Year = year;
	            scope.Month = month;
	        }
	    };
	})
})()