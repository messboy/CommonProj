(function () {
    angular.module('sbAdminApp')
        .factory('adminService', ['$q', '$filter', '$timeout', '$http', '$state', 'paginationHelper', 'errorHelper',
        function ($q, $filter, $timeout, $http, $state, paginationHelper, errorHelper) {
            /**************************初始設定**************************/
            var getListApiURL = 'Admin/GetList';
            var getDetailApiURL = 'Admin/GetDetail';
            var addDataApiURL = 'Admin/Add';
            var deleteDataApiURL = 'Admin/Delete';
            var updateDataApiURL = 'Admin/Update';


            /**************************設定服務**************************/
            var service = {
                getList: getList,
                getDetail: getDetail,
                addData: addData,
                deleteData: deleteData,
                updateData: updateData
            };


            /**************************動作事件**************************/
            // 取得列表
            function getList(start, number, tableState) {
                var deferred = $q.defer();
                console.log(tableState);
                // 接資料庫
                var response = $http.post(getListApiURL, paginationHelper.setParam(start, number, tableState))
                .then(function (response) {
                    console.log(response.data);
                    deferred.resolve({
                        data: response.data,
                        numberOfPages: Math.ceil(response.data[0].TotalCount / number)  //總共幾頁
                    }), function (errorResponse) {    //fail
                        alert(errorResponse.data);
                    };
                });

                return deferred.promise;
            }

            // 取得詳細資料
            function getDetail(id) {
                var deferred = $q.defer();

                // 接資料庫
                var response = $http.get(getDetailApiURL + '/' + id)
                .then(function (response) {
                    deferred.resolve({
                        data: response.data,
                    }),
                    function (errorResponse) {
                        alert(errorResponse);
                    }
                });

                return deferred.promise;
            }

            // 新增
            function addData(vm) {
                console.log(vm.data);
                $http.post(addDataApiURL, vm.data

                ).
                then(function (response) {  //sucess
                    $state.go("dashboard.admin", { obj: { message: "新增成功" }}, { reload: true });
                }, function (errorResponse) {    //fail
                    console.log(errorResponse.data);
                    alert('新增失敗 : ' + errorResponse.data);
                });
            }

            // 刪除
            function deleteData(id) {
                var response = $http.get(deleteDataApiURL + '/' + id)
                .then(function (response) {
                    $state.go("dashboard.admin", {}, { reload: true });
                }, function (errorResponse) {    //fail
                    alert('刪除失敗 : ' + errorResponse.data);
                });
            }

            // 更新
            function updateData(vm) {
                console.log(vm.data);
                $http.post(updateDataApiURL, vm.data)
                .then(function (response) {  //sucess
                    console.log(response);
                    $state.go("dashboard.admin", { obj: { message: "更新成功" }}, { reload: true });
                }, function (errorResponse) {    //fail
                    alert('更新失敗 : ' + errorResponse.data);
                });
            }



            /**************************私人方法**************************/
            return service;
        }]);
})()