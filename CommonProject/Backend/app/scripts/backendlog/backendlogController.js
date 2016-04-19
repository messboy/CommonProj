 

(function () {
    angular.module('sbAdminApp')
        .controller('BackendlogCtrl', ['$scope', '$filter', 'backendlogService', '$state', '$stateParams', '$uibModal',
            function ($scope, $filter, backendlogService, $state, $stateParams, $uibModal) {
                /**************************初始設定**************************/
                var id;
                var vm = this;
                vm.displayed = [];  //資料列


                /***************************初使化***************************/
                init();
                function init() {
					initSearchOption();
                }


                /**************************動作事件**************************/
				 				
                // 讀取service資料
                vm.callServer = function callServer(tableState) {
                    console.log(tableState)
                    vm.isLoading = true;	// loading畫面用
                    
                    var pagination = tableState.pagination;

                    var start = pagination.start || 0;     // This is NOT the page number, but the index of item in the list that you want to use to display the table.
                    var number = pagination.number || 10;  // Number of entries showed per page.

                    tableState = (tableState) ? tableState : {};    //設定搜尋時間
                    tableState.beginTime = vm.beginTime;
                    tableState.endTime = vm.endTime;

                    backendlogService.getList(start, number, tableState).then(function (result) {
                        vm.totalCount = (result.data[0] ==  undefined) ? 0 : result.data[0].TotalCount;
                        vm.displayed = result.data;
                        console.log(result.data);
                        tableState.pagination.numberOfPages = result.numberOfPages;//set the number of pages so the pagination can update
                        vm.isLoading = false;
                    });
                };

                // 顯示詳細資料
                vm.showDetail = function (id) {
                    console.log(id);
                    $uibModal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'backendLogModal.html',
                        controller: 'BackendLogDetailCtrl as d',
                        size: 'lg',
                        resolve: {
                            items: function () {
                                return vm.displayed[id];
                            }
                        }
                    });
                };

                // 設定datePicker
                vm.datePicker = (function () {
                    var method = {};
                    method.instances = [];

                    method.open = function ($event, instance) {
                        $event.preventDefault();
                        $event.stopPropagation();

                        method.instances[instance] = true;
                    };

                    method.options = {
                        'show-weeks': false,
                        startingDay: 0
                    };

                    var formats = ['MM/dd/yyyy', 'dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
                    method.format = formats[0];

                    return method;
                })();

                // 搜尋時間事件
                vm.begintimechange = function () {
                    // TODO 驗證起迄時間
                    $('.begintime').click()
                }

                vm.endtimechange = function () {
                    // TODO 驗證起迄時間
                    $('.endtime').click()
                }

                /**************************私人方法**************************/
				// 搜尋選項
                function initSearchOption() {
					vm.predicates = [
							{ key: 'CreatedBy', value: '建立者' },
							{ key: 'Action', value: '動作' },
                            { key: 'Controller', value: '上稿類型' },
						];
					vm.selectedPredicate = vm.predicates[0].key;
                }

            }])
        /**************************Modal**************************/
        .controller('BackendLogDetailCtrl',
            function ($scope, $uibModalInstance, items) {
                var vm = this;
                vm.items = items;
                console.log(vm.items);
                if (typeof (vm.items.Message) != 'object') {
                    vm.items.Message = JSON.parse(vm.items.Message);
                }

                vm.ok = function () {
                    $uibModalInstance.close();
                };

            });
})()



