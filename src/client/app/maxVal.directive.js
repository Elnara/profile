(function() {
    'use strict';

    angular
        .module('app')
        .directive('ngMax', ngMax)
        .directive('ngMin', ngMin);

    ngMax.$inject = ['$timeout', '$window'];
    /* @ngInject */
    function ngMax($timeout, $window) {
        var directive = {
            restrict: 'A',
            require: 'ngModel',       
            link: link
        };
        return directive;
        //////////////// 

        function isEmpty(value) {
            return angular.isUndefined(value) || value === '' || value === null || value !== value;
        }

        function link(scope, elem, attr, ctrl) {
            ctrl.$parsers.push(function(val) {
                var clean = val ?
                        val : 
                        0;

                if (clean > attr.ngMax) {
                    clean = attr.ngMax;

                    ctrl.$setViewValue(clean);
                    ctrl.$render();
                }
                return clean;
            });
        }
    }

    ngMin.$inject = ['$timeout', '$window'];
    /* @ngInject */
    function ngMin($timeout, $window) {
        var directive = {
            restrict: 'A',
            require: 'ngModel',       
            link: link
        };
        return directive;
        //////////////// 

        function link(scope, elem, attr, ctrl) {
            ctrl.$parsers.push(function(val) {
                var clean = val ?
                        val : 
                        0;

                if (clean < attr.ngMin) {
                    clean = attr.ngMin;

                    ctrl.$setViewValue(clean);
                    ctrl.$render();
                }
                return clean;
            });
        }
    }
})();