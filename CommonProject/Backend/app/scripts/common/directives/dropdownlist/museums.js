(function () {
'use strict';

angular.module('sbAdminApp')
	.directive('ddlMuseums', function ($rootScope, DROPDOWN_LIST) {
	    return {
	        template: '<select  class="form-control" ng-model="selectValue" ng-options="c.value as c.value for c in Museums"></select>',
	        restrict: 'E',
	        scope: {
	            selectValue: '='
	        },
	        link: function (scope, elem, attrs) {
	            var data = DROPDOWN_LIST.ALL_MUSEUMS;
	            var museum = $rootScope.user.museum;
	            
	            if (museum != '') { // 若非最高管理人員,只顯示該人員所屬館所
	                data = [{
	                    //key: "" + museum + "",
	                    value: museum
	                }];
	            }
	            scope.Museums = data
	            console.log(scope.selectValue);
	            if (!scope.selectValue) {
	                scope.selectValue = scope.Museums[0].value;
	            }
	        }
	    };
	})

})()