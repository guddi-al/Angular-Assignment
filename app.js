(function() {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        var vm = this;
        vm.lunchMenu = "";
        vm.message = "";

        vm.checkIfTooMuch = function() {
            if (vm.lunchMenu.trim() === "") {
                vm.message = "Please enter data first";
            } else {
                var items = vm.lunchMenu.split(',').filter(item => item.trim() !== '');
                if (items.length <= 3) {
                    vm.message = "Enjoy!";
                } else {
                    vm.message = "Too much!";
                }
            }
        };
    }
})();
