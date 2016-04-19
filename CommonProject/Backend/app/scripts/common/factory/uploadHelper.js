
(function () {
    angular.module('sbAdminApp')
        .factory('uploadService', ['$q', '$filter', '$timeout', '$http', '$state', 'Upload',
        function ($q, $filter, $timeout, $http, $state, Upload) {
            /**************************初始設定**************************/
            var uploadImgURL = 'FileUtility/UploadCoverImg';
            var uploadMutiImgURL = 'FileUtility/UploadFile';

            /**************************設定服務**************************/
            var service = {
                uploadImg: uploadImg,
                uploadMutiImg: uploadMutiImg
            };


            /**************************動作事件**************************/

            // 上傳圖片
            function uploadImg(files) {
                var deferred = $q.defer();

                if (files && files.length) {
                    Upload.upload({
                        url: uploadImgURL,
                        data: { files: files }
                    }).then(function (response) {
                        $timeout(function () {
                            deferred.resolve({
                                data: response.data,
                            });
                        });
                    }, function (response) {
                        if (response.status > 0) {
                            alert(response.status + ': ' + response.data);

                        }
                    }, function (evt) {
                        console.log(evt);
                        //vm.progress =
                        //    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                    });
                }

                return deferred.promise;
            }

            // 上傳圖片
            function uploadMutiImg(files) {
                var deferred = $q.defer();

                if (files && files.length) {
                    Upload.upload({
                        url: uploadMutiImgURL,
                        data: { files: files }
                    }).then(function (response) {
                        $timeout(function () {
                            deferred.resolve({
                                data: response.data,
                            });
                        });
                    }, function (response) {
                        if (response.status > 0) {
                            alert(response.status + ': ' + response.data);

                        }
                    }, function (evt) {
                        console.log(evt);
                        //vm.progress =
                        //    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                    });
                }

                return deferred.promise;
            }

            /**************************私人方法**************************/
            return service;
        }]);
})()