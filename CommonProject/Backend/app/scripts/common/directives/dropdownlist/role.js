(function () {
'use strict';

angular.module('sbAdminApp')
	.directive('ddlLanguage', function () {
	    return {
	        template: '<select  class="form-control" ng-model="selectValue" ng-options="c.key as c.value for c in Language"></select>',
	        restrict: 'E',
	        scope: {
	            selectValue: '='
	        },
	        link: function (scope, elem, attrs) {
	            scope.Language = [
                    { key: '中文', value: '中文' },
                    { key: '英文', value: '英文' },
                    { key: '閩南語', value: '閩南語' },
                    { key: '客家語', value: '客家語' },
                    { key: '原住民語', value: '原住民語' },
                    { key: '其他', value: '其他' }
	            ];
	            scope.selectValue = scope.Language[0].key;
	        }
	    };
	})

})()