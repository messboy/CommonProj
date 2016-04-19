 

(function () {
    angular.module('sbAdminApp')
        .controller('MemberCtrl', ['$scope', '$filter', 'memberService', '$state', '$stateParams', '$uibModal',
            function ($scope, $filter, memberService, $state, $stateParams, $uibModal) {
                /**************************初始設定**************************/
                var id;
                var vm = this;
                vm.displayed = [];  //資料列


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
                        memberService.deleteData(contentID);
                    }

                }

                // 顯示詳細資料
                vm.showFavorite = function (id) {
                    console.log(id);
                    $uibModal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'memberFavoriteModal.html',    //在member.html頁面
                        controller: 'MemberFavoriteCtrl as m',
                        size: 'lg',
                        resolve: {
                            items: function () {
                                console.log(vm.displayed[id].Content);
                                return {
                                    MyFavorite: vm.displayed[id].Content,
                                    MyCalendar: vm.displayed[id].News,
                                }
                            }
                        }
                    });
                };
				 				
                // 讀取service資料
                vm.callServer = function callServer(tableState) {

                    vm.isLoading = true;	// loading畫面用

                    var pagination = tableState.pagination;

                    var start = pagination.start || 0;     // This is NOT the page number, but the index of item in the list that you want to use to display the table.
                    var number = pagination.number || 10;  // Number of entries showed per page.

                    memberService.getList(start, number, tableState).then(function (result) {
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
							{key : 'account', value: '帳號' },
							{ key: 'name', value: '姓名' },
							//{key : 'nickeName', value: '暱稱' },
							{key : 'email', value: '信箱' },
						];
					vm.selectedPredicate = vm.predicates[0].key;
                }

            }])
        /**************************Modal**************************/
        .controller('MemberFavoriteCtrl',
            function ($scope, $uibModalInstance, items) {
                var vm = this;
                vm.myFavorite = items.MyFavorite;
                vm.myCalendar = items.myCalendar;
                console.log(vm);

                vm.ok = function () {
                    $uibModalInstance.close();
                };

            });
})()



