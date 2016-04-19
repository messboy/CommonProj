 

(function () {
    angular.module('sbAdminApp')
        .controller('ReportShareCtrl', ['$scope', '$filter', 'reportShareService', '$state', '$stateParams', '$uibModal', 'CONSTANTS',
            function ($scope, $filter, reportShareService, $state, $stateParams, $uibModal, CONSTANTS) {
                /**************************初始設定**************************/
                var id;
                var vm = this;
                vm.displayed = [];  //資料列
                vm.year = new Date().getFullYear().toString();
                vm.month = (new Date().getMonth() + 1).toString();
                console.log(vm.month)
                vm.type = CONSTANTS.THEME_CONTENT_TYPE_ELEAENING;


                /***************************初使化***************************/
                init();
                function init() {
                    getLists();
                    typeOption();
                }

                /**************************動作事件**************************/
                // 更新統計
                vm.updateInfo = function () {
                    getLists();
                }

                /**************************私人方法**************************/
                // 讀取資料
                function getLists() {
                    reportShareService.getShareRecordList(vm.type, vm.year, vm.month).then(function (result) {
                        vm.displayed.googleRecord = result.data.GoogleRecord;
                        vm.displayed.facebookRecord = result.data.FacebookRecord;
                        vm.displayed.lineRecord = result.data.LineRecord;
                        vm.displayed.twitterRecord = result.data.TwitterRecord;
                        console.log(result.data);

                        
                    });
                };

                // 類型篩選
                function typeOption()
                {
                    vm.typeOptions = [CONSTANTS.THEME_CONTENT_TYPE_COLLECTION,
                                        CONSTANTS.THEME_CONTENT_TYPE_ELEAENING,
                                        "APP資源",
                                        "電子書城"
                                    ];
                }

               
            }])
})()



