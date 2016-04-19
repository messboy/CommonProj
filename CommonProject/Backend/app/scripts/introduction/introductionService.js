 


(function () {
    angular.module('sbAdminApp')
        .factory('introductionService', ['$q', '$filter', '$timeout', '$http', '$state', 'paginationHelper', 'errorHelper',
        function ($q, $filter, $timeout, $http, $state, paginationHelper, errorHelper) {
            /**************************初始設定**************************/
            var getListApiURL = 'Introduction/GetList';
            var getDetailApiURL = 'Introduction/GetDetail';
            var addDataApiURL = 'Introduction/Add';
            var deleteDataApiURL = 'Introduction/Delete';
            var updateDataApiURL = 'Introduction/Update';


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
                    deferred.resolve({
                        data: response.data,
                        numberOfPages: Math.ceil(response.data[0].TotalCount / number)  //總共幾頁
                    });
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

                    });
                });


                return deferred.promise;
            }

            // 新增
            function addData(vm) {
                console.log(vm.data);
                $http.post(addDataApiURL, vm.data

                ).
                then(function (response) {  //sucess
                    $state.go("dashboard.introduction", { obj: { message: "新增成功" } });
                }, function (errorResponse) {    //fail
                    console.log(errorResponse.data);
                    alert('新增失敗 : ' + errorResponse.data);
                });
            }
			
            // 刪除
            function deleteData(id) {
                var response = $http.get(deleteDataApiURL + '/' + id)
                .then(function (response) {
                    $state.go("dashboard.introduction", {}, { reload: true });
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
                    $state.go("dashboard.introduction", { obj: { message: "更新成功" } });
                }, function (errorResponse) {    //fail
                    alert('更新失敗 : ' + errorResponse.data);
                });
            }

            

            /**************************私人方法**************************/
            function getFakeDate() {
                return {
                    data: {
                        ID: "demo",
                        MuseumName: "demo",
                        Description: "demo",
                        Phone: "demo",
                        Email: "demo",
                        IsPublish: "true",
                        ModifiedTime: "2015-11-16",
                    }
                }
            }

			return service;
        }]);
})()
