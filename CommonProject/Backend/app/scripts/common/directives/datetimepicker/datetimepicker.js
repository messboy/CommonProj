(function () {
    'use strict';
    angular.module('sbAdminApp')
	.directive('datetimepicker', function (uploadService) {
	    return {
	        templateUrl: 'app/scripts/common/directives/datetimepicker/datetimepicker.html',
	        restrict: 'E',
	        scope: {
	            selectValue: '=',
	        },
	        link: function (scope, elem, attrs) {
	            scope.datePicker = (function () {
	                var method = {};
	                method.instances = [];

	                method.open = function ($event, instance) {
	                    $event.preventDefault();
	                    $event.stopPropagation();

	                    method.instances[instance] = true;
	                };

	                method.options = {
	                    'show-weeks': false,
	                    startingDay: 0
	                };

	                var formats = ['MM/dd/yyyy', 'dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	                method.format = formats[4];

	                return method;
	            })();
	        }
	    };
	})
})()
