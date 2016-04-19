(function () {
    angular.module('sbAdminApp')
        .filter('isPublish', function () {
            return function (input) {
                return input ? '啟用' : '停用';
            }
        })
        .filter('adminRole', function () {
            return function (input) {
                var role;
                switch (input) {
                    case 0: role = '最高管理者';
                        break;
                    case 1: role = '館所管理者';
                        break;
                    case 2: role = '一般管理者';
                        break;
                }
                return role;
            }
        })
        .filter('defalutPic', function () {
            return function (imgPath, isOuterCoverImage) {
                console.log(isOuterCoverImage);
                if (isOuterCoverImage) return imgPath;
                var filePath = 'imgs/crop/70/70/' + imgPath;
                var defaultPath = 'app/img/no-img.jpg';
                return imgPath ? filePath : defaultPath;
            }
        })
        .filter('parseState', function () {
            return function (input) {
                var role;
                switch (input) {
                    case 0: role = '待檢查';
                        break;
                    case 1: role = '新增成功';
                        break;
                    case 2: role = '資料錯誤';
                        break;
                }
                return role;
            }
        })
        .filter('state', function () {
            return function (input) {
                var role;
                switch (input) {
                    case true: role = '啟用';
                        break;
                    case false: role = '停權';
                        break;
                }
                return role;
            }
        })
        .filter('parse_action', function () {
            return function (input) {
                var role;
                switch (input) {
                    case "Update": role = '更新資料';
                        break;
                    case "UploadXmlZip": role = '上傳資料'; 
                        break;
                    case "UploadExcel": role = '上傳資料';
                        break;
                    case "Add": role = '新增資料';
                        break;
                    case "Delete": role = '刪除資料';
                        break; 
                }
                return role;
            }
        })
         .filter('community_type', function () {
             return function (input) {
                 var role;
                 switch (input) {
                     case "General": role = '大眾類型';
                         break;
                     case "Teacher": role = '教師類型';
                         break;
                     case "Student": role = '學生類型';
                         break;
                 }
                 return role;
             }
         })
         .filter('community_title', function () {
             return function (input) {
                 var role;
                 switch (input) {
                     case "News": role = '最新消息';
                         break;
                     case "Science": role = '科普新知';
                         break;
                     case "Edisplay": role = '數位展示';
                         break;
                     case "Elearning": role = '數位學習';
                         break;
                     case "Collection": role = '數位典藏';
                         break;
                     case "Innovation": role = '創新體驗';
                         break;
                     case "Ebook": role = '電子書城';
                         break;
                     case "Introduction": role = '社教館介紹';
                         break;
                 }
                 return role;
             }
         })
        .filter('parse_controller', function () {
            return function (input) {
                var role;
                switch (input) {
                    case "Admin": role = '帳號管理';
                        break;
                    case "App": role = 'App資源';
                        break;
                    case "BackendLog": role = '後台log';
                        break;
                    case "Collection": role = '典藏資料';
                        break;
                    case "Discount": role = '好康優惠';
                        break;
                    case "EBook": role = '電子書城';
                        break;
                    case "ELearning": role = '數位學習';
                        break;
                    case "EDisplay": role = '數位展示';
                        break;
                    case "Innovation": role = '創新體驗';
                        break;
                    case "Introduction": role = '參觀介紹';
                        break;
                    case "News": role = '最新消息';
                        break;
                    case "Product": role = '文創商品';
                        break;
                    case "Science": role = '科普新知';
                        break;
                    case "Theme": role = '主題設定';
                        break; 
                    case "FileUtility": role = '資源共享';
                        break;
                }
                return role; 
            }
        })
         .filter('default_museum', function () {
             return function (input) {
                 if (input) return input;
                 return "最高管理員";
             }
         })
        //.filter('MuseumString', function () {
        //    return function (input) {
        //        var museum;
        //        switch (input) {
        //            case '0': museum = '無';
        //                break;
        //            case '1': museum = '國立自然科學博物館';
        //                break;
        //            case '2': museum = '國立科學工藝博物館';
        //                break;
        //            case '3': museum = '國立海洋生物博物館';
        //                break;
        //            case '4': museum = '國立海洋科技博物館';
        //                break;
        //            case '5': museum = '國立教育廣播電臺';
        //                break;
        //            case '6': museum = '國立臺灣科學教育館';
        //                break;
        //            case '7': museum = '國立公共資訊圖書館';
        //                break;
        //            case '8': museum = '國立臺灣圖書館';
        //                break;
        //            case '9': museum = '國家圖書館';
        //                break;
        //        }
        //        return museum;
        //    }
        //});    
})()