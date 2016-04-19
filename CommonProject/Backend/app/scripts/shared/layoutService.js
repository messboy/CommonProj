(function () {
    angular.module('sbAdminApp')
        .factory('layoutService', ['$q', '$filter', '$timeout', '$http', '$state', 'errorHelper',
        function ($q, $filter, $timeout, $http, $state, errorHelper) {
            /**************************初始設定**************************/
            var getMenuUrl = 'Admin/GetMenuByAdminID';


            /**************************設定服務**************************/
            var service = {
                getMenuByAccountId: getMenuByAccountId,
            };


            /**************************動作事件**************************/
            // 取得MenuList
            function xx(userID) {
                console.log('取得MenuList');
                $http.post(getMenuUrl, { id: userID }).
                    success(function (data, status, headers, config) {
                        $scope.menuAuthorization = data;
                        console.log(data);
                        // 驗證menu權限
                        $scope.isValid = comparer;
                    });
            }

            // 取得列表
            function getMenuByAccountId(userID) {
                var deferred = $q.defer();
                // 接資料庫
                var response = $http.post(getMenuUrl, { id: userID })
                .then(function (response) {
                    //console.log(response.data);
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