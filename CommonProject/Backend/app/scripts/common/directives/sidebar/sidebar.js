'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('sbAdminApp')
  .directive('sidebar',['$location',function() {
    return {
    templateUrl: 'app/scripts/common/directives/sidebar/sidebar.html',
      restrict: 'E',
      replace: true,
      scope: {
          //menuAuthorization: '=',
      },
      controller: function ($scope, $rootScope, $http, layoutService) {
       
        // menu 展開縮合功能
        $scope.selectedMenu = 'dashboard';
        $scope.collapseVar = 0;
        $scope.multiCollapseVar = 0;
        
        $scope.check = function(x){
          
          if(x==$scope.collapseVar)
            $scope.collapseVar = 0;
          else
            $scope.collapseVar = x;
        };
        
        $scope.multiCheck = function(y){
          
          if(y==$scope.multiCollapseVar)
            $scope.multiCollapseVar = 0;
          else
            $scope.multiCollapseVar = y;
        };

          // 取得MenuList
        layoutService.getMenuByAccountId($rootScope.user.userID).then(function (result) {
            $scope.menuAuthorization = result.data;
            //console.log(result.data);
            // 驗證menu權限
            $scope.isValid = comparer;
        });

        // 比對帳號是否允許此MenuID
        function comparer(menuId) {
            var comparer = $scope.menuAuthorization.map(function (x) { return x.MenuID; });
            return comparer.indexOf(menuId) >= 0;
        };

      }
    }
  }])
;
