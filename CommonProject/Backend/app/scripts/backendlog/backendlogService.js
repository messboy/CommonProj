 


(function () {
    angular.module('sbAdminApp')
        .factory('backendlogService', ['$q', '$filter', '$timeout', '$http', '$state', 'paginationHelper', 'errorHelper',
        function ($q, $filter, $timeout, $http, $state, paginationHelper, errorHelper) {
            /**************************初始設定**************************/
            var getListApiURL = 'Backendlog/GetList';
            var getDetailApiURL = 'Backendlog/GetDetail';


			/**************************設定服務**************************/
            var service = {
                getList: getList,
                getDetail: getDetail,
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

            // 取得詳細資料
            function getDetail(id) {
                var deferred = $q.defer();

                // 接資料庫
                var response = $http.get(getDetailApiURL + '/' + id)
                .then(function (response) {
                    console.log(response.data);
                    deferred.resolve({
                        data: response.data,
                    }),
                    function (errorResponse) {
                        alert(errorResponse);
                    }
                });

                return deferred.promise;
            }

            /**************************私人方法**************************/
			return service;
        }]);
})()