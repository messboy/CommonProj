(function () {
    angular.module('sbAdminApp')
        .factory('paginationHelper', function () {

            // 設定分頁、排序、搜尋等參數
            function setParam(start, number, tableState) {
                console.log(tableState);
                var SearchField = tableState.search.predicateObject ? Object.keys(tableState.search.predicateObject)[0] : "";
                var SearchValue = SearchField ? tableState.search.predicateObject[SearchField] : "";
                var BeginTime = SearchField ? tableState.search.predicateObject['BeginTime'] : "";
                var EndTime = SearchField ? tableState.search.predicateObject['EndTime'] : "";
                return {
                    "Start": start,
                    "Number": number,
                    "NumberOfPages": tableState.pagination.numberOfPages,
                    "SearchField": SearchField,
                    "SearchValue": SearchValue,
                    "SortName": tableState.sort.predicate,
                    "IsDescending": tableState.sort.reverse,
                    "BeginTime":BeginTime,
                    "EndTime": EndTime,

                }
            }

            // 設定分頁、排序、搜尋、Type等參數
            function setParam(start, number, tableState, type) {
                var SearchField = tableState.search.predicateObject ? Object.keys(tableState.search.predicateObject)[0] : "";
                var SearchValue = SearchField ? tableState.search.predicateObject[SearchField] : "";
                var BeginTime = SearchField ? tableState.search.predicateObject['BeginTime'] : "";
                var EndTime = SearchField ? tableState.search.predicateObject['EndTime'] : "";
                return {
                    "Start": start,
                    "Number": number,
                    "NumberOfPages": tableState.pagination.numberOfPages,
                    "SearchField": SearchField,
                    "SearchValue": SearchValue,
                    "SortName": tableState.sort.predicate,
                    "IsDescending": tableState.sort.reverse,
                    "Type": type,
                    "BeginTime": BeginTime,
                    "EndTime": EndTime,
                }
            }

            return {
                setParam: setParam
            };
        });
})()