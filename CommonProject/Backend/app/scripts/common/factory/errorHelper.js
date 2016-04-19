(function () {
    angular.module('sbAdminApp')
        .factory('errorHelper', function () {
            var service = {
                getErrorMessage: getErrorMessage
            }


            function getErrorMessage(errorResponse) {
                // 後台驗證錯誤處理
                if (errorResponse.data.ModelState) {
                    var errors = [];
                    for (var key in errorResponse.data.ModelState) {
                        for (var i = 0; i < errorResponse.data.ModelState[key].length; i++) {
                            errors.push(errorResponse.data.ModelState[key][i]);
                        }
                    }
                    console.log(errors)
                    return errors;
                }
                else {
                    console.log(errorResponse)
                    return errorResponse;
                }
                
            }

            return service;
        });
})()