(function () {
    angular.module('sbAdminApp')
        .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, $state, $stateParams, items) {
            var vm = this;
            vm.direct = function (type) {
                $uibModalInstance.close();
                $state.go(items, { obj: { type: type } });

            };
        });
       
})()


