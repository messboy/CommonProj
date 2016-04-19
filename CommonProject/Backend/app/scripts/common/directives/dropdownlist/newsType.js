(function () {
'use strict';

angular.module('sbAdminApp')
	.directive('ddlNewsType', function () {
	    return {
	        template: '<select  class="form-control" ng-model="selectValue" ng-options="c.key as c.value for c in NewsType"></select>',
	        restrict: 'E',
	        scope: {
	            selectValue: '='
	        },
	        link: function (scope, elem, attrs) {
	            scope.NewsType = [
                    { key: '1', value: '展覽' },
                    { key: '2', value: '演出' },
                    { key: '3', value: '研習' },
                    { key: '4', value: '推廣' },
                    { key: '5', value: '影片欣賞' },
                    { key: '6', value: '節目表' },
                    { key: '7', value: '志工園地' },
                    { key: '8', value: '演講' },
                    { key: '9', value: '特展' },
                    { key: '99', value: '其他' },

	            ];
	            scope.selectValue = scope.NewsType[0].key;
	        }
	    };
	})

})()