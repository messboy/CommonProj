(function () {
    'use strict';
    angular.module('sbAdminApp')
	.directive('uploadMutiImg', function (uploadService) {
	    return {
	        templateUrl: 'app/scripts/common/directives/upload/uploadMutiImg.html',
	        restrict: 'E',
	        scope: {
	            fileuploads: '=',
	        },
	        link: function (scope, elem, attrs) {
	           

                // upload xml資料
	            scope.uploadFiles = function (file) {
	                uploadService.uploadMutiImg(file).then(function (result) {
	                    scope.isUploaded = true;
	                    console.log(result.data);
	                    scope.fileuploads = result.data;
	                    scope.Files = "";
	                });
	            };

                // 上傳前顯示檔案名稱
	            scope.showFiles = function (files) {
	                scope.Files = files;
	            }
	        }
	    };
	})
})()