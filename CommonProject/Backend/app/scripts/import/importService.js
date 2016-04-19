 


(function () {
    angular.module('sbAdminApp')
        .factory('importService', ['$q', '$filter', '$timeout', '$http', '$state', 'paginationHelper', 'errorHelper', 'Upload',
        function ($q, $filter, $timeout, $http, $state, paginationHelper, errorHelper, Upload) {
            /**************************初始設定**************************/
            var importXmlURL = 'FileUtility/UploadXmlZip';
            var importExcelURL = 'FileUtility/UploadExcel';
            var getListApiURL = 'Import/GetList';

			/**************************設定服務**************************/
            var service = {
                importXml: importXml,
                importExcel: importExcel,
                getList: getList
            };

            /**************************動作事件**************************/
            // 取得列表
            function getList(start, number, tableState) {
                var deferred = $q.defer();
                // 接資料庫
                var response = $http.post(getListApiURL, paginationHelper.setParam(start, number, tableState))
                .then(function (response) {
                    console.log(response.data);
                    deferred.resolve({
                        data: response.data,
                        numberOfPages: Math.ceil(response.data[0].TotalCount / number)  //總共幾頁
                    });
                });

                return deferred.promise;
            }

            // 匯入XML
            function importXml(type, files) {
                var deferred = $q.defer();

                if (files && files.length) {
                    Upload.upload({
                        url: importXmlURL ,
                        data: {
                            files: files,
                            type: type
                        }
                    }).then(function (response) {
                        $timeout(function () {
                            deferred.resolve({
                                data: response.data,
                            });
                            alert("Zip資料已上傳，請等候檢查");
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

            // 匯入Excel
            function importExcel(type, files) {
                var deferred = $q.defer();
                if (files && files.length) {
                    Upload.upload({
                        url: importExcelURL,
                        data: {
                            files: files,
                            type: type
                        }
                    }).then(function (response) {
                        $timeout(function () {
                            deferred.resolve({
                                data: response.data,
                            });
                            alert("Excel資料已上傳，請等候檢查");
                        });
                    }, function (response) {
                        if (response.status > 0) {
                            alert(response.status + ': ' + response.data);

                        }
                    }, function (evt) {
                        console.log(evt);
                    });
                }
                return deferred.promise;
            }

            /**************************私人方法**************************/
			return service;
        }]);
})()