'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('ckeditor', function () {
	    return {
	        require: '?ngModel',
	        link: function (scope, element, attrs, ngModel) {

	            var ckeditor = ckeditor.replace(element[0], {
	                filebrowserImageUploadUrl: '/FileUtility/UploadPicture',
	                height: 350
	            });
	            if (!ngModel) {
	                return;
	            }
	            ckeditor.on('instanceReady', function () {
	                ckeditor.setData(ngModel.$viewValue);
	            });
	            ckeditor.on('pasteState', function () {
	                scope.$apply(function () {
	                    ngModel.$setViewValue(ckeditor.getData());
	                });
	            });
	            ngModel.$render = function (value) {
	                ckeditor.setData(ngModel.$viewValue);
	            };
	        }
	    };
	});