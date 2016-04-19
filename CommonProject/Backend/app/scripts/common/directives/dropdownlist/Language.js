(function () {
'use strict';

angular.module('sbAdminApp')
	.directive('ddlRole', function () {
	    return {
	        template: '<select  class="form-control" ng-model="selectValue" ng-options="c.key as c.value for c in Role"></select>',
	        restrict: 'E',
	        scope: {
	            selectValue: '='
	        },
	        link: function (scope, elem, attrs) {
	            scope.Role = [
                    { key: '作者', value: '作者' },
                    { key: '提供者', value: '提供者' },
                    { key: '教育部委辦計畫/單位', value: '教育部委辦計畫/單位' },
                    { key: '教育確認者', value: '教育確認者' },
	            ];
	            scope.selectValue = scope.Role[0].key;
	        }
	    };
	})

})()