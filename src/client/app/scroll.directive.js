(function() {
    'use strict';

    angular
        .module('statement')
        .directive('mtcScroll', mtcScroll);

    mtcScroll.$inject = ['$timeout', '$window'];
    /* @ngInject */
    function mtcScroll($timeout, $window) {
        return function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
scope.scrolled = true;
               $timeout(function() {
                    scope.scrolled = false;
                    scope.$apply();
               }, 2000);                
                scope.$apply();
            });
        };    
    }
})();
