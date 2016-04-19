 


(function () {
    angular.module('sbAdminApp')
        .factory('reportVisitService', ['$q', '$filter', '$timeout', '$http', '$state', 'paginationHelper', 'errorHelper',
        function ($q, $filter, $timeout, $http, $state, paginationHelper, errorHelper) {
            /**************************初始設定**************************/
            var getListApiURL = 'Report/GetVisitFlowList';
            var getGoogleAnalyticsTokenURL = 'Report/GetGoogleAnalyticsToken';


			/**************************設定服務**************************/
            var service = {
                getVisitFlowList: getVisitFlowList,
                getGoogleAnalyticsToken: getGoogleAnalyticsToken
            };


            /**************************動作事件**************************/
            // 取得列表
            function getVisitFlowList(Year, Month) {
                var deferred = $q.defer();
                
                // 接資料庫
                var response = $http.post(getListApiURL, 
                    {
                        "Year": Year,
                        "Month": Month,
                    })
                .then(function (response) {
                    deferred.resolve({
                        data: response.data,
                    }), function (errorResponse) {    //fail
                        alert(errorResponse.data);
                    };
                });

                return deferred.promise;
            }

            // 取得GoogleAnalyticsToken
            function getGoogleAnalyticsToken() {
                var deferred = $q.defer();

                // 接資料庫
                var response = $http.get(getGoogleAnalyticsTokenURL)
                .then(function (response) {
                    deferred.resolve({
                        data: response.data,
                    }), function (errorResponse) {    //fail
                        alert(errorResponse.data);
                    };
                });

                return deferred.promise;
            }
            /**************************私人方法**************************/
			return service;
        }]);
})()