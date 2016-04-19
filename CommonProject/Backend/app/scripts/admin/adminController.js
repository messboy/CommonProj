(function () {
    angular.module('sbAdminApp')
        .controller('AdminCtrl', ['$rootScope','$scope', '$filter', 'adminService', '$state', '$stateParams', '$uibModal',
            function ($rootScope, $scope, $filter, adminService, $state, $stateParams, $uibModal) {
                /**************************初始設定**************************/
                var id;
                var vm = this;
                vm.displayed = [];  //資料列
                vm.currentUser = $rootScope.user;

                /***************************初使化***************************/
                init();
                function init() {
                    // 新增/更新後顯示
                    if ($stateParams.obj) {
                        alert($stateParams.obj.message);
                    }

                    initSearchOption();
                }


                /**************************動作事件**************************/
                // 刪除資料
                vm.removeRow = function removeRow(contentID) {
                    if (confirm("確定要刪除?")) {
                        adminService.deleteData(contentID);
                    }

                }


                // 讀取service資料
                vm.callServer = function callServer(tableState) {

                    vm.isLoading = true;	// loading畫面用

                    var pagination = tableState.pagination;

                    var start = pagination.start || 0;     // This is NOT the page number, but the index of item in the list that you want to use to display the table.
                    var number = pagination.number || 10;  // Number of entries showed per page.

                    adminService.getList(start, number, tableState).then(function (result) {
                        vm.displayed = result.data;
                        vm.totalCount = (result.data[0] ==  undefined) ? 0 : result.data[0].TotalCount;

                        tableState.pagination.numberOfPages = result.numberOfPages;//set the number of pages so the pagination can update
                        vm.isLoading = false;
                    });
                };


                /**************************私人方法**************************/
                // 搜尋選項
                function initSearchOption() {
                    vm.predicates = [
							{ key: 'Account', value: '帳號' },
							{ key: 'Name', value: '姓名' },
							{ key: 'Tel', value: '電話' },
							{ key: 'Email', value: '信箱' },
                    ];
                    vm.selectedPredicate = vm.predicates[0].key;
                }

            }])

})()



