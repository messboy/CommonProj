'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('searchWatchModel', function () {
        return {
            require: '^stTable',
            scope: {
                searchWatchModel: '='
            },
            link: function (scope, ele, attr, ctrl) {
                var table = ctrl;

                scope.$watch('searchWatchModel', function (val) {
                    ctrl.search(val);
                });

            }
        };
    });


