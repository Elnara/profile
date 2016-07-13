(function() {
    'use strict';

    angular
        .module('app')
        .directive('mtcScroll', mtcScroll);

    mtcScroll.$inject = ['$timeout', '$window'];
    /* @ngInject */
    function mtcScroll($timeout, $window) {
        return function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
                if(scope.scrolled) {
                    scope.doubleScroll = true;
                }

                scope.scrolled = true;

               $timeout(function() {                            
                    if(scope.doubleScroll){
                        scope.doubleScroll = false;
                        scope.scrolled = true;
                    } else {
                        scope.scrolled = false;
                    }
                    scope.$apply(); 
               }, 2000);                
                scope.$apply();
            });
        };    
    }
})();
