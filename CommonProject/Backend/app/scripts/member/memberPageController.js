 

(function () {
    angular.module('sbAdminApp')
        .controller('MemberPageCtrl', ['$scope', '$state', '$stateParams', 'memberService', 'CHECKBOX_LIST','DROPDOWN_LIST', 'formHelper','config',
            function ($scope, $state, $stateParams, memberService, CHECKBOX_LIST, DROPDOWN_LIST, formHelper, config) {

                /**************************初始設定**************************/
                var vm = this;
                vm.isDebug = config.isDebug;
                vm.data = {};
				vm.data.IsPublish = true;
                                
                vm.subjects = CHECKBOX_LIST.ALL_SUBJECTS; // 適用領域
                vm.submitted = false;   //驗證用
                vm.isEdit = $stateParams.id ? true : false;  //編輯or新增頁面


                /***************************初始化***************************/
                init();
                function init() {
                    if (vm.isEdit) {
                         callServer($stateParams.id);   // 撈資料
 					} else {
                        initGrade();
						initValidation();
                    }
                }


                /**************************動作事件**************************/
                // 新增資料
                vm.addItem = function addItem() {
                    //驗證用
                    vm.submitted = true;    
                    // 驗證表單
                    if ($scope.form1.$valid) {
                        var response = memberService.addData(vm);
                    } else {
                        console.log($scope.form1.$valid);
                    }
                };

                // 更新資料
                vm.updateItem = function updateItem() {
                    //驗證用
                    vm.submitted = true;    
                    // 驗證表單
                    if ($scope.form1.$valid) {
                        var response = memberService.updateData(vm);
                    } else {
                        console.log("驗證 : " + $scope.form1.$valid);
                    }

                };

                // 取得編輯資料
                function callServer(id) {
                    vm.isLoading = true;

                    memberService.getDetail(id).then(function (result) {
                        vm.isLoading = false;
                        vm.data = result.data;
						                        initGrade();
						initValidation();
                        foolProofing();
                    });
                };



                /**************************私人方法**************************/
                // 驗證
                function initValidation() {
                    $scope.isInvalid = function (field) {
                        return $scope.form1[field].$invalid && ($scope.form1[field].$dirty || vm.submitted);
                    };

                    $scope.isValid = function (field) {
                        return $scope.form1[field].$valid && $scope.form1[field].$dirty;
                    };
                }
		
                // 各年級欄位初始化
                function initGrade() {    
					vm.grades = CHECKBOX_LIST.ALL_GRADES; // 年級
                    vm.data.GradeLevel = 0;                }
				
                // 初始值防呆
                function foolProofing() {
                }
                
		}]);
})()



