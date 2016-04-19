

(function () {
    angular.module('sbAdminApp')
        .controller('AdminPageCtrl', ['$rootScope', '$scope', '$state', '$stateParams', 'adminService', 'CHECKBOX_LIST', 'DROPDOWN_LIST', 'formHelper', 'config', 'layoutService',
        function ($rootScope, $scope, $state, $stateParams, adminService, CHECKBOX_LIST, DROPDOWN_LIST, formHelper, config, layoutService) {

                /**************************初始設定**************************/
                var vm = this;
                var currentUser = $rootScope.user; 
                vm.isDebug = config.isDebug;
                vm.data = {};
                vm.data.Enable = true;
                vm.data.Role = currentUser.role;
                vm.data.Menu = {};
                vm.submitted = false;   //驗證用
                vm.isEdit = $stateParams.id ? true : false;  //編輯or新增頁面


                /***************************初始化***************************/
                init();
                function init() {
                    if (vm.isEdit) {
                        callServer($stateParams.id);   // 撈資料
                    } else {
                        initValidation();
                        initRolesRadioBtn();
                        initMenuCheckboxs();
                    }
                }


                /**************************動作事件**************************/
                // 新增資料
                vm.addItem = function addItem() {
                    //驗證用
                    vm.submitted = true;
                    // 驗證表單
                    if ($scope.form1.$valid) {
                        var response = adminService.addData(vm);
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
                        var response = adminService.updateData(vm);
                    } else {
                        console.log("驗證 : " + $scope.form1.$valid);
                    }

                };

                // 取得編輯資料
                function callServer(id) {
                    vm.isLoading = true;

                    adminService.getDetail(id).then(function (result) {
                        vm.isLoading = false;
                        vm.data = result.data;
                        //console.log(result.data);
                        initValidation();
                        initRolesRadioBtn();
                        initMenuCheckboxs();
                        foolProofing();
                    });
                };

                // 權限change事件
                vm.setMeseum = function () {
                    if (vm.data.Role == '0') vm.data.Museum = 0;
                }
                
                // checkParent(a.data.Menu)
                vm.checkParent = function (menu, thisMenus) {
                    var menuContainer = filterBy(vm.data.Menu, menu.GroupID);    // 篩選當前group
                    //console.log(menuContainer)
                    
                    var comparer = menuContainer.data.map(function (x) { return x.MenuID; });   
                    //console.log(comparer)

                    // 判斷子項目都沒選 -> 取消父項目
                    if (menuContainer.data.length === 1 && menuContainer.data[0].IsParent && thisMenus.length !== 1) {
                        console.log('取消父項目')
                        vm.data.Menu = removeDuplicates(vm.data.Menu, thisMenus)
                    }
                    // 判斷子項目都選了 -> 選擇父項目
                    if (thisMenus.length - menuContainer.data.length == 1 && !menuContainer.hasParent) {
                        console.log('選擇父項目')
                        vm.data.Menu = mergeDuplicates(vm.data.Menu, thisMenus)
                    }
                    // 全選
                    if (menu.IsParent && comparer.indexOf(menu.MenuID) >= 0) {
                        console.log('全選')
                        vm.data.Menu = mergeDuplicates(vm.data.Menu, thisMenus)
                    }
                    // 全取消
                    if (menu.IsParent && comparer.indexOf(menu.MenuID) < 0) {
                        console.log('取消')
                        vm.data.Menu = removeDuplicates(vm.data.Menu, thisMenus)
                    }
                }
                /**************************私人方法**************************/
                // 驗證
                function initValidation() {
                    $scope.isInvalid = function (field) {
                        if (field != 'menu') {
                            return $scope.form1[field].$invalid && ($scope.form1[field].$dirty || vm.submitted);
                        }
                    };

                    $scope.isValid = function (field) {
                        return $scope.form1[field].$valid && $scope.form1[field].$dirty;
                    };
                }

                // 初始值防呆
                function foolProofing() {

                }

                // 初始角色權限
                function initRolesRadioBtn() {
                    // 依照當下權限顯示權限內的資料
                    var roles;
                    switch (currentUser.role) {
                        case 0: roles = DROPDOWN_LIST.ADMIN_ALL_ROLES;
                            break;
                        case 1: roles = DROPDOWN_LIST.ADMIN_MUSEUM_ROLES;
                            break;
                        case 2: roles = DROPDOWN_LIST.ADMIN_GENERAL_ROLES;
                            break;
                        default:
                            break;
                    }
                    vm.roles = roles;
                  
                }

                // 初始Menu項目設定
                function initMenuCheckboxs() {
                    //vm.menus = MENU_LIST.ALL;
                    // 取得MenuList
                    // TODO 驗證需要改成非同步
                    layoutService.getMenuByAccountId(currentUser.userID).then(function (result) {
                        if (!vm.isEdit) vm.data.Menu = result.data;
                        var menuList = groupBy(result.data)        
                        vm.menus1 = menuList[10];
                        vm.menus2 = menuList[20];
                        vm.menus3 = menuList[30];
                        vm.menus4 = menuList[40];
                        vm.menus5 = menuList[50];
                        vm.menus6 = menuList[60];
                        vm.menus7 = menuList[70];
                        vm.menus8 = menuList[80];
                        vm.menus9 = menuList[90];
                    });
                    
                }

                // 依groupID分類
                function groupBy(obj) {
                    var result = {};
                    obj.forEach(function (item) {
                        var list = result[item.GroupID];
                        if (list) {
                            list.push(item);
                        } else {
                            result[item.GroupID] = [item];
                        }
                    });
                    return result;
                }

                // 依groupID filter
                function filterBy(obj, groupID) {
                    var list = {
                        data: [],
                        hasParent: false
                    };
                    obj.forEach(function (item) {
                        if (item.GroupID == groupID) {
                            list.data.push(item);
                        }
                        if (item.GroupID == groupID && item.IsParent) {
                            list.hasParent = true;
                        }
                    });
                    console.log(list);
                    return list;
                }

                // 比對MenuID, merge重複obj, 回傳a
                function mergeDuplicates(a, b) {
                    $.merge(a, b);
                    // 消除重複
                    var existingIDs = [];
                    a = $.grep(a, function (v) {
                        if ($.inArray(v.MenuID, existingIDs) !== -1) {
                            return false;
                        }
                        else {
                            existingIDs.push(v.MenuID);
                            return true;
                        }
                    });

                    //排序
                    a.sort(function (a, b) {
                        var akey = a.MenuID, bkey = b.MenuID;
                        if (akey > bkey) return 1;
                        if (akey < bkey) return -1;
                        return 0;
                    });

                    return a;
                }

                // 比對MenuID, remove重複obj
                function removeDuplicates(a, b) {

                    var result = a.filter(function (item) {
                        for (var i = 0, len = b.length; i < len; i++) {
                            if (b[i].MenuID == item.MenuID) {
                                return false;
                            }
                        }
                        return true;
                    });

                    return result;
                }
            }]);
})()



