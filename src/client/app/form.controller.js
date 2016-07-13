(function() {
    'use strict';

    angular
        .module('app')
        .controller('FormCtrl', FormCtrl);

    FormCtrl.$inject = ['$anchorScroll', '$location', 'ngNotify', '$scope', '$timeout', '$window'];

    /* @ngInject */
    function FormCtrl($anchorScroll, $location, ngNotify, $scope, $timeout, $window) {

        /*jshint validthis: true */
        var vm = this;
        vm.currentPage = 1;
        vm.itemsPerPage = 5;
        vm.maxSize = 5;
        vm.minDate = new Date();
        vm.remove = remove;
        vm.sent = sent;
        vm.submit = false;
        vm.sort = sort;
        vm.sortType = true;
        vm.toTop = toTop();
        vm.profileInfo = [];
        init();

        ////////////////

        function init() { 
            vm.profileInfo = {
                fio: 'Гайнанова Эльнара Мансуровна',
                email: 'gainanovawork@gmail.com',
                phone: '9020000230',
                city: 'Ульяновск',
                education: 'высшее, УлГТУ, очно-дневное, 2014 год',
                info: 'описание'
            }



var windowElement = angular.element($window);
windowElement.on('beforereload', function (event) {
    // do whatever you want in here before the page unloads.        
alert(1);
    // the following line of code will prevent reload or navigating away.
    event.preventDefault();
});            
        }

        function remove(key) {
            profilerv.deleteElement(vm.profileInfo, key);
        }

        function sent() {
            vm.submit = true;

            if($scope.appform.$error.required) {
                ngNotify.set(
                    "Пожалуйста, заполните все обязательные поля", 
                    {
                        type: 'error', position: 'top', duration: 5000
                    }
                );
            } else {
                vm.submit = false;
                vm.profileInfo.push(vm.profileInfo);
                vm.profileInfo = {};
            }
        }

        function sort(type) {
            vm.sortType = !vm.sortType;

            if('date' === type) {
                vm.profileInfo = profilerv.sortingForDate(vm.profileInfo, vm.sortType);
            }
        }

        function toTop() {
            $location.hash('header');
            $anchorScroll();
        }
    }
})();
