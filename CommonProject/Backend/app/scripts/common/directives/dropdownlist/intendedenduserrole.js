(function () {
'use strict';

angular.module('sbAdminApp')
	.directive('ddlIntendedenduserrole', function () {
	    return {
	        template: '<select  class="form-control" ng-model="selectValue" ng-options="c.key as c.value for c in IntendedEndUserRole"></select>',
	        restrict: 'E',
	        scope: {
	            selectValue: '='
	        },
	        link: function (scope, elem, attrs) {
	            scope.IntendedEndUserRole = [
                    { key: '學習者', value: '學習者' },
                    { key: '教學者', value: '教學者' }
	            ];
	            scope.selectValue = scope.IntendedEndUserRole[0].key;
	        }
	    };
	})

})()