 

(function () {
    angular.module('sbAdminApp')
        .controller('ReportFailureCtrl', ['$scope', '$filter', 'reportFailureService', '$state', '$stateParams', '$uibModal',
            function ($scope, $filter, reportFailureService, $state, $stateParams, $uibModal) {
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

                    reportFailureService.getList(start, number, tableState).then(function (result) {
                        vm.totalCount = (result.data[0]) ? result.data[0].TotalCount : 0;
                        vm.displayed = result.data;
                        console.log(result.data);
                        tableState.pagination.numberOfPages = result.numberOfPages;//set the number of pages so the pagination can update
                        vm.isLoading = false;
                    });
                };

                //debug用 : 更新失效連結
                vm.scanFailureLinks = function () {
                    reportFailureService.scanFailureLinks();
                }

                // 匯出報表
                vm.downloadReport = function (contentID) {
                    reportFailureService.downloadReport();
                }

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
							{ key : 'type', value: '類型' },
						];
					vm.selectedPredicate = vm.predicates[0].key;
                }

            }])
})()



