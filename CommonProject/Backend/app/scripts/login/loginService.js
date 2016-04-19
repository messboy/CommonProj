(function () {
    angular.module('sbAdminApp')
        .factory('loginService', ['$rootScope', '$q', '$filter', '$timeout', '$http', '$state', 'paginationHelper', '$location',
        function ($rootScope, $q, $filter, $timeout, $http, $state, paginationHelper, $location) {
            /**************************初始設定**************************/
            var signinUrl = 'Login/Login';
            var signoutUrl = 'Login/LogOff';

            /**************************設定服務**************************/
            var service = {
                signin: signin,
                signout: signout
            };

            /**************************動作事件**************************/
            // 登入
            function signin(user) {
                var deferred = $q.defer();
                // 接資料庫
                var response = $http.post(signinUrl, user)
                 .success(function (data, status, headers, config) {
                     console.log(data);
                     // TODO Debug 第一次權限名稱沒有進到home
                     $rootScope.user = {
                        userName: data.UserName,
                        authenticated: "" + data.Authenticated + "",
                        role: data.Role,
                        userID: data.ID
                     }
                     $state.go('dashboard.admin', {}, { reload: true });
                     deferred.resolve({
                         data: data,
                     });
                 })
                .error(function (data, status, headers, config) {
                    user.authenticated = false;
                    $rootScope.user = {};

                    deferred.resolve({
                        isFailLogin: true,
                    });
                });

                return deferred.promise;
            }

            // 登出
            function signout() {
                $http.post(signoutUrl).
                    success(function () {
                        $rootScope.user = {};
                    });
            };

            /**************************私人方法**************************/
            return service;
        }]);
})()