 

(function () {
    angular.module('sbAdminApp')
        .controller('ImportCtrl', ['$scope', '$filter', 'importService', '$state', '$stateParams', '$timeout',
            function ($scope, $filter, importService, $state, $stateParams, $timeout) {
                /**************************初始設定**************************/
                var vm = this;
                vm.importOption = getImportOption();
                vm.importType = getImportTypeOption();
                vm.format = '1';  
                vm.type = '0';    //預設web 教學資源(九年一貫) 

                /***************************初使化***************************/
                init();
                function init() {

                }

                /**************************動作事件**************************/
                // 讀取service資料
                vm.callServer = function callServer(tableState) {
                    vm.isLoading = true;	// loading畫面用

                    var pagination = tableState.pagination;

                    var start = pagination.start || 0;     // This is NOT the page number, but the index of item in the list that you want to use to display the table.
                    var number = pagination.number || 10;  // Number of entries showed per page.

                    importService.getList(start, number, tableState).then(function (result) {
                        vm.displayed = result.data;
                        tableState.pagination.numberOfPages = result.numberOfPages;//set the number of pages so the pagination can update
                        vm.isLoading = false;
                    });
                };

                // upload xml資料
                vm.uploadFiles = function (file) {
                    if (vm.format == 1) {
                        importService.importXml(vm.type, file).then(function (result) {
                            $state.reload();  // 重整
                        });
                    } else if (vm.format == 2) {
                        importService.importExcel(vm.type, file).then(function (result) {
                            $state.reload();  // 重整
                        });
                    }
                }
                
                vm.showFiles = function (files) {
                    vm.Files = files;
                }

                vm.changeTypes = function (val) {
                    if (val == 1) {
                        vm.uploadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel';
                    } else if (val == 2) {
                        vm.uploadType = '.csv';
                    }
                    ////.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel
                }

                /**************************私人方法**************************/
                function getImportOption() {
                    var data = [
                        { key: '0', value: 'web 教學資源(九年一貫)' },
                        { key: '1', value: 'web 教學資源(高中職)' },
                        { key: '2', value: '教育電子書' },
                        { key: '3', value: '數位典藏(九年一貫)' },
                        { key: '4', value: '數位典藏(高中職)' }
                    ];
                    return data;
                }

                function getImportTypeOption() {
                    var data = [
                        { key: '1', value: 'Zip' },
                        { key: '2', value: 'Excel' },
                    ];
                    return data;
                }
            }])

})()



