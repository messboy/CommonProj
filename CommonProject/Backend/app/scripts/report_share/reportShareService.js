 


(function () {
    angular.module('sbAdminApp')
        .factory('reportShareService', ['$q', '$filter', '$timeout', '$http', '$state',
        function ($q, $filter, $timeout, $http, $state) {
            /**************************初始設定**************************/
            var getListApiURL = 'Report/GetShareRecordList';

			/**************************設定服務**************************/
            var service = {
                getShareRecordList: getShareRecordList,
            };


            /**************************動作事件**************************/
            // 取得列表
            function getShareRecordList(Type, Year, Month) {
                var deferred = $q.defer();
                
                // 接資料庫
                var response = $http.post(getListApiURL, 
                    {
                        "Year": Year,
                        "Month": Month,
                        "Type" : Type
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

           

            /**************************私人方法**************************/
			return service;
        }]);
})()