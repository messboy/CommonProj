(function () {
    angular.module('sbAdminApp')
        .controller('LayoutCtrl', ['$scope', '$state', '$stateParams', '$rootScope', '$http',
        function ($scope, $state, $stateParams, $rootScope, $http) {
                /**************************初始設定**************************/
                var vm = this;
                vm.currentUser = $scope.user;
                vm.menuList;
                

                /***************************初使化***************************/
                init();
                function init() {
                    console.log("是否驗證 : " + vm.currentUser.authenticated + "  帳號 : " + vm.currentUser.userName);

                    // 驗證
                    if (vm.currentUser.authenticated !== 'true') {
                        $state.go("login");
                    }
                }

                /**************************動作事件**************************/                
                
                /**************************私人方法**************************/
                

        }])
   
})()


