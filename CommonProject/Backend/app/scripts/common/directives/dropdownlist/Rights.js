(function () {
'use strict';

angular.module('sbAdminApp')
	.directive('ddlRights', function () {
	    return {
	        template: '<select  class="form-control" ng-model="selectValue" ng-options="c.key as c.value for c in Rights"></select>',
	        restrict: 'E',
	        scope: {
	            selectValue: '='
	        },
	        link: function (scope, elem, attrs) {
	            scope.Rights = [
                    { key: '1', value: '創用CC 姓名標示 3.0 台灣' },
                    { key: '2', value: '創用CC 姓名標示-非商業性 3.0 台灣' },
                    { key: '3', value: '創用CC 姓名標示-禁止改作 3.0 台灣' },
                    { key: '4', value: '創用CC 姓名標示-相同方式分享 3.0 台灣' },
                    { key: '5', value: '創用CC 姓名標示-非商業性-禁止改作 3.0 台灣' },
                    { key: '6', value: '創用CC 姓名標示-非商業性-相同方式分享3.0 台灣 '},
	                //{ key: '7', value: '創用CC 姓名標示 2.5 台灣 '},
	                //{ key: '8', value: '創用CC 姓名標示-非商業性 2.5 台灣 '},
	                //{ key: '9', value: '創用CC 姓名標示-禁止改作 2.5 台灣 '},
	                //{ key: '10', value: '創用CC 姓名標示-相同方式分享 2.5 台灣 '},
	                //{ key: '11', value: '創用CC 姓名標示-非商業性-禁止改作 2.5 台灣 '},
	                //{ key: '12', value: '創用CC 姓名標示-非商業性-相同方式分享 2.5 台灣 '},
	                //{ key: '13', value: '創用CC 姓名標示 2.0 台灣 '},
	                //{ key: '14', value: '創用CC 姓名標示-非商業性 2.0 台灣 '},
	                //{ key: '15', value: '創用CC 姓名標示-禁止改作 2.0 台灣 '},
	                //{ key: '16', value: '創用CC 姓名標示-相同方式分享 2.0 台灣 '},
	                //{ key: '17', value: '創用CC 姓名標示-非商業性-禁止改作 2.0 台灣 '},
	                //{ key: '18', value: '創用CC 姓名標示-非商業性-相同方式分享 2.0 台灣 '},
	                { key: '19', value: '公共領域'},
	                { key: '20', value: '著作權所有'},
	                //{ key: '21', value: '創用CC 姓名標示 4.0 國際 '},
	                //{ key: '22', value: '創用CC 姓名標示-非商業性 4.0 國際 '},
	                //{ key: '23', value: '創用CC 姓名標示-禁止改作 4.0 國際 '},
	                //{ key: '24', value: '創用CC 姓名標示-相同方式分享 4.0國際'},
	                //{ key: '25', value: '創用CC 姓名標示-非商業性-禁止改作 4.0 國際 '},
	                //{ key: '26', value: '創用CC 姓名標示-非商業性-相同方式分享 4.0 國際 '},
	                //{ key: '27', value: 'CC0 1.0 公眾領域貢獻宣告 '},
	            ];
	            scope.selectValue = scope.Rights[0].key;
	        }
	    };
	})

})()