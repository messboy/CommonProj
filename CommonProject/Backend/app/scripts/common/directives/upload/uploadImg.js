(function () {
    'use strict';
    angular.module('sbAdminApp')
	.directive('uploadImg', function (uploadService) {
	    return {
	        templateUrl: 'app/scripts/common/directives/upload/uploadImg.html',
	        restrict: 'E',
	        scope: {
	            imgPath: '=',
                note: '=',
	        },
	        link: function (scope, elem, attrs) {
	            console.log(scope.imgPath);
                // upload xml資料
	            scope.uploadFiles = function (file) {
	                uploadService.uploadImg(file).then(function (result) {
	                    scope.isUploaded = true;
	                    scope.imgPath = result.data;
	                });
	            };

	            scope.showFiles = function (files) {
	                scope.Files = files;
	            }

	            scope.remove = function (imgPath) {
	                scope.isUploaded = false;
	                scope.imgPath = "";
	            }
	        }
	    };
	})
})()