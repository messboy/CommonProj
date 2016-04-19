 
(function () {
    angular.module('sbAdminApp')
        .controller('SciencePageCtrl', ['$scope', '$state', '$stateParams', 'scienceService', 'CHECKBOX_LIST','DROPDOWN_LIST', 'formHelper',
            function ($scope, $state, $stateParams, scienceService, CHECKBOX_LIST, DROPDOWN_LIST, formHelper) {

                /**************************初始設定**************************/
                var vm = this;
                vm.data = {};
				vm.data.Contribution = [{}];
				
				vm.data.IsPublish = true;
				vm.data.hasResourceURL = true;
				vm.data.IsOuterCoverImage = false;
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
                        initTypeOption();
                    }
                }


                /**************************動作事件**************************/
                // 新增資料
                vm.addItem = function addItem() {
                    //驗證用
                    vm.submitted = true;    
                    // 驗證表單
                    if ($scope.form1.$valid) {
                        var response = scienceService.addData(vm);
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
                        var response = scienceService.updateData(vm);
                    } else {
                        console.log("驗證 : " + $scope.form1.$valid);
                    }

                };

                // 取得編輯資料
                function callServer(id) {
                    vm.isLoading = true;

                    scienceService.getDetail(id).then(function (result) {
                        vm.isLoading = false;
                        vm.data = result.data;
						//vm.IsJunior = (vm.data.GradeLevel == 1) ? true : false;
                        initGrade();
                        initValidation();
                        initTypeOption();
                        foolProofing();
                    });
                };

                // 圖片類型change事件
                vm.radioChange = function (isOuterLinkImg) {
                    vm.data.CoverImage = '';
                }

                // 資源類型change事件
                vm.resourceChange = function (hasResourceURL) {
                    vm.data.ResourceLink = '';
                    vm.data.Note = '';

                }

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
                    vm.data.GradeLevel = 0;
                }

                // 初始值防呆
                function foolProofing() {
                    vm.data.Contribution = (vm.data.Contribution) ? vm.data.Contribution : [{}];
                    vm.data.hasResourceURL = (vm.data.ResourceLink) ? true : false;
                }
                
                // 高中資源類型 : 連動下拉選單
                function initReourceDropdownList() {
                    
                    vm.level1 = DROPDOWN_LIST.SENIOR_RESOURCE_TYPE;
                    var defaultVal = vm.level1[0];
                    vm.level1Value = defaultVal;
                    // 第一層onchange
                    vm.selectChange = function (val) {
                        // 第二層
                        var options = formHelper.getOptionsOfSeniorType(val);
                        vm.level2 = options;
                        vm.data.ResourceType = (options) ? options[0] : '網路資源';
                    }
                    vm.selectChange(defaultVal);
                }
          

                // 高中適用領域 : 三層連動
                function initSubjectDropdownList() {
                    vm.subjectLevel1 = DROPDOWN_LIST.MAIN_SENIOR_SUBJECT;
                    var defaultVal = vm.subjectLevel1[0];
                    vm.subjectLevel1Value = defaultVal;

                    vm.selectOneChange = selectOneChange;
                    vm.selectTwoChange = selectTwoChange;
                    vm.selectOneChange(defaultVal);

                    // 第一層onchange
                    function selectOneChange(val) {
                        // 第二層
                        var options = formHelper.getOptionsOfSecondSubject(val);
                        vm.subjectLevel2 = options;
                        vm.subjectLevel2Value = options[0];
                        vm.selectTwoChange(options[0]);
                    };
                    // 第二層onchange
                    function selectTwoChange(val) {
                        console.log(val)
                        // 第三層
                        var options = formHelper.getOptionsOfThirdSubject(val);
                        vm.subjectLevel3 = options;
                        console.log(options[0]);
                        vm.data.Subject = options[0];
                    };
                }

                // 上傳類別
                function initTypeOption() {
                    vm.imgTypes = [
                      { key: '外部網址', value: true },
                      { key: '檔案上傳', value: false },
                    ]

                    // 資源連結類型
                    vm.resourceTypes = [
                      { key: '外部網址', value: true },
                      { key: '自行上稿(HTML)', value: false },
                    ]
                }

            }]);
})()



