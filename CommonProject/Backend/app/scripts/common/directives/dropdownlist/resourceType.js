(function () {
    'use strict';

    angular.module('sbAdminApp')
        .directive('ddlJuniorResourceType', function () {
            return {
                template: '<select  class="form-control" ng-model="selectValue" ng-options="c.key as c.value for c in ReourceType"></select>',
                restrict: 'E',
                scope: {
                    selectValue: '='
                },
                link: function (scope, elem, attrs) {
                    scope.ReourceType = [
                        { key: '教學設計', value: '教學設計' },
                        { key: '教學活動 ', value: '教學活動' },
                        { key: '教材 ', value: '教材' },
                        { key: '素材', value: '素材' },
                        { key: '學習單', value: '學習單' },
                    ];
                    scope.selectValue = scope.ReourceType[0].key;
                    console.log(scope.selectValue);
                }
            };
        })
        .directive('ddlSeniorResourceType', function () {
            return {
                templateUrl: 'app/scripts/common/directives/dropdownlist/SeniorReourceType.html',
                restrict: 'E',
                scope: {
                    selectValue: '=',

                },
                link: function (scope, elem, attrs) {



                    scope.level1 = [
                         { key: '1', value: '主11動式' },
                         { key: '2', value: '互22動式' },
                         { key: '3', value: '混33合式' }
                    ];
                    //第一層下拉選單onchange
                    //selectedValue為選擇的Value字串
                    scope.myChange = function (selectedValue) {
                        console.log('changing');
                        //產生第二層下拉選單
                        var data = getlevel2data(selectedValue);
                        scope.level2 = data;
                        scope.selectValue = data[0].key;

                    }

                    scope.level1Value = scope.level1[0].key;
                    scope.myChange();

                    function getlevel2data(selectedValue) {
                        var data = [
                         { key: '主動式', value: '主動式' },
                         { key: '互動式', value: '互動式' },
                         { key: '混合式', value: '混合式' }
                        ];
                        return data;
                    }


                }
            };
        })
})()