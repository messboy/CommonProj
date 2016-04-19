'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('checkboxGrades', function () {
	    return {
	        templateUrl: 'app/scripts/common/directives/checkboxs/grades.html',
	        //template: '<select  class="form-control" ng-model="selectValue" ng-options="c.key as c.value for c in Grades"></select>',
	        restrict: 'E',
	        scope: {
	            selectValue: '='
	        },
	        link: function (scope, elem, attrs) {
	            alert("test");
	            scope.Grades = [
                    { GradeName: '國小1年級' },
                    { GradeName: '國小2年級' },
                    { GradeName: '國小3年級' },
                    { GradeName: '國小4年級' },
                    { GradeName: '國小5年級' },
                    { GradeName: '國小6年級' },
                    { GradeName: '國中1年級' },
                    { GradeName: '國中2年級' },
                    { GradeName: '國中3年級' },
                    { GradeName: '高中1年級' },
                    { GradeName: '高中2年級' },
                    { GradeName: '高中3年級' },
                    { GradeName: '高職1年級' },
                    { GradeName: '高職2年級' },
                    { GradeName: '高職3年級' },
	            ];
	            scope.selectValue = scope.Grades[0].GradeName;
	        }
	    };
	})

