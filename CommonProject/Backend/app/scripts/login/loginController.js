(function () {
    angular.module('sbAdminApp')
        .controller('LoginCtrl', ['$scope', '$filter', 'loginService', '$state', '$stateParams', 
            function ($scope, $filter, loginService, $state, $stateParams) {
                /**************************初始設定**************************/
                var vm = this;
                vm.user = {};  //資料列

                /***************************初使化***************************/

                init();
                function init() {
                    // 登出
                    if ($stateParams.obj && $stateParams.obj == 'signout') {
                        console.log($stateParams.obj); //signout
                        loginService.signout();
                    }

                }

                /**************************動作事件**************************/
                // 登入
                vm.Signin = function (user) {
                    loginService.signin(user).then(function (result) {
                        console.log(result);
                        vm.isFailLogin = result.isFailLogin;
                    });
                };


                /**************************私人方法**************************/


            }])
})()


