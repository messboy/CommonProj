 


(function () {
    angular.module('sbAdminApp')
        .factory('exportService', ['$q', '$filter', '$timeout', '$http', '$state', 'paginationHelper', 'errorHelper',
        function ($q, $filter, $timeout, $http, $state, paginationHelper, errorHelper) {
            /**************************初始設定**************************/
            var exportXmlURL = 'Export/ExportXml';
            var exportExcelURL = 'Export/ExportExcel';

			/**************************設定服務**************************/
            var service = {
                exportXml: exportXml,
                exportExcel: exportExcel
            };


            /**************************動作事件**************************/

            // 匯出XML
            function exportXml(type, beginTime, endTime) {
                beginTime = ParseDateToString(beginTime);
                endTime = ParseDateToString(endTime);
                window.location = exportXmlURL + "?Type=" + type + "&BeginTime=" + beginTime + "&EndTime=" + endTime;
            }

            // 匯出Excel
            function exportExcel(type, beginTime, endTime) {
                beginTime = ParseDateToString(beginTime);
                endTime = ParseDateToString(endTime);
                window.location = exportExcelURL + "?Type=" + type + "&BeginTime=" + beginTime + "&EndTime=" + endTime;
            }

            /**************************私人方法**************************/
            return service;

            function ParseDateToString(date)
            {
                var result = date;
                if (date) {
                    result = (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear();
                }
                return result;
            }
        }]);
})()