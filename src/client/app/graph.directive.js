(function() {
    'use strict';

    angular
        .module('app')
        .directive('graph', graph);

    graph.$inject = ['$timeout', '$window'];
    /* @ngInject */
    function graph($timeout, $window) {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/graph.html',
            replace: true,
            transclude: true,
            scope: {},
            controller: GraphCtrl,
            controllerAs: 'vm',
            bindToController: true        
        };
        return directive;
        //////////////// 
    }

    GraphCtrl.$inject = ['$rootScope'];
    /* @ngInject */
    function GraphCtrl($rootScope) {
        /*jshint validthis: true */
        var vm = this;

        init();

        ////////////////

        function init() {
            vm.model = {
                angularJs: 8, 
                css: 7, 
                vanilaJs: 7, 
                gulp: 8,
                html: 8, 
                jQuery: 7, 
                preCss: 8
            };
        }
    }
})();
