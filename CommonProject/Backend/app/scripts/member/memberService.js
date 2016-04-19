 


(function () {
    angular.module('sbAdminApp')
        .factory('memberService', ['$q', '$filter', '$timeout', '$http', '$state', 'paginationHelper', 'errorHelper',
        function ($q, $filter, $timeout, $http, $state, paginationHelper, errorHelper) {
            /**************************初始設定**************************/
            var getListApiURL = 'Member/GetList';
            var getDetailApiURL = 'Member/GetDetail';
            var addDataApiURL = 'Member/Add';
            var deleteDataApiURL = 'Member/Disable';
            var updateDataApiURL = 'Member/Update';


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
                    var numberOfPages;
                    if (response.data[0]) {
                        numberOfPages = Math.ceil(response.data[0].TotalCount / number);
                    } else {
                        numberOfPages = 1;
                    }
                    deferred.resolve({
                        data: response.data,
                        numberOfPages: numberOfPages   //總共幾頁
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
                    $state.go("dashboard.member", { obj: { message: "新增成功" } });
                }, function (errorResponse) {    //fail
                    console.log(errorResponse.data);
                    alert('新增失敗 : ' + errorResponse.data);
                });
            }
			
            // 刪除
            function deleteData(id) {
                var response = $http.get(deleteDataApiURL + '/' + id)
                .then(function (response) {
                    $state.go("dashboard.member", {}, { reload: true });
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
                    $state.go("dashboard.member", { obj: { message: "更新成功" } });
                }, function (errorResponse) {    //fail
                    alert('更新失敗 : ' + errorResponse.data);
                });
            }

            

            /**************************私人方法**************************/
			return service;
        }]);
})()