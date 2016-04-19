 


(function () {
    angular.module('sbAdminApp')
        .factory('reportFailureService', ['$q', '$filter', '$timeout', '$http', '$state', 'paginationHelper', 'errorHelper',
        function ($q, $filter, $timeout, $http, $state, paginationHelper, errorHelper) {
            /**************************初始設定**************************/
            var getListApiURL = 'Report/GetFailureLinkList';
            var scanFailureLinksApiURL = 'Report/ScanFailureLinks';
            var downloadReportLinksApiURL = 'Report/DownloadFailureReport';

			/**************************設定服務**************************/
            var service = {
                getList: getList,
                scanFailureLinks: scanFailureLinks,
                downloadReport: downloadReport,
            };

            /**************************動作事件**************************/
            // 取得列表
            function getList(start, number, tableState) {
                var deferred = $q.defer();
                
                // 接資料庫
                var response = $http.post(getListApiURL, paginationHelper.setParam(start, number, tableState))
                .then(function (response) {
                    var numberOfPages;
                    if (response.data[0]) {
                        numberOfPages = Math.ceil(response.data[0].TotalCount / number);
                    } else {
                        numberOfPages = 1;
                    }
                    deferred.resolve({
                        data: response.data,
                        numberOfPages: numberOfPages  //總共幾頁
                    }), function (errorResponse) {    //fail
                        alert(errorResponse.data);
                    };
                });

                return deferred.promise;
            }

            // 匯出報表
            function downloadReport() {
                window.location = downloadReportLinksApiURL;
            }

            function scanFailureLinks()
            {
                var response = $http.get(scanFailureLinksApiURL)
                .then(function (response) {
                    alert("已同步至最新資料");
                    $state.go("dashboard.report_failure", {}, { reload: true });
                }, function (errorResponse) {    //fail
                    alert('同步失敗 : ' + errorResponse.data);
                });
            }
            /**************************私人方法**************************/
			return service;
        }]);
})()