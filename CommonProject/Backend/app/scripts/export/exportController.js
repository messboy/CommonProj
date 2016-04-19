 

(function () {
    angular.module('sbAdminApp')
        .controller('ExportCtrl', ['$scope', '$filter', 'exportService', '$state', '$stateParams', '$uibModal',
            function ($scope, $filter, exportService, $state, $stateParams, $uibModal) {
                /**************************初始設定**************************/
                var vm = this;
                vm.exportOption = getImportOption();
                vm.exportFormat = getImportFormat();
                vm.Format = 'zip';    //預設web 教學資源(九年一貫) 
                vm.type = 'elearning_junior';    //預設web 教學資源(九年一貫) 


                /***************************初使化***************************/
                init();
                function init() {

                }


                /**************************動作事件**************************/
                // 匯出資料
                vm.export = function (contentID) {
                    //elearningService.deleteData(contentID);
                    if (!vm.beginTime || !vm.endTime) {
                        alert("請輸入時間");
                        return false;
                    }

                    if (vm.Format == 'zip') {
                        exportService.exportXml(vm.type, vm.beginTime, vm.endTime);
                    } else if (vm.Format == 'excel') {
                        exportService.exportExcel(vm.type, vm.beginTime, vm.endTime);
                    }
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

                /**************************私人方法**************************/
                function getImportOption() {
                    var data = [
                        { key: 'collection', value: '典藏資料' },
                        { key: 'elearning_junior', value: 'web 教學資源(九年一貫)' },
                        { key: 'elearning_senior', value: 'web 教學資源(高中職)' },
                        //{ key: 'app', value: '教育電子書' },
                        { key: 'ebook', value: '教育電子書' },
                    ];
                    return data;
                }

                function getImportFormat() {
                    var data = [
                        { key: 'zip', value: 'Zip' },
                        { key: 'excel', value: 'Excel' },
                    ];
                    return data;
                }
            }])

})()



