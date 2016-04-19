(function () {
'use strict';

angular.module('sbAdminApp')
	.directive('ddlInteractivitytype', function () {
	    return {
	        template: '<select  class="form-control" ng-model="selectValue" ng-options="c.key as c.value for c in interactivityType"></select>',
	        restrict: 'E',
	        scope: {
	            selectValue: '='
	        },
	        link: function (scope, elem, attrs) {
	            scope.interactivityType = [
                     { key: '主動式', value: '主動式' },
                     { key: '互動式', value: '互動式' },
                     { key: '混合式', value: '混合式' }
	            ];
	            scope.selectValue = scope.interactivityType[0].key;
	        }
	    };
	})


})()