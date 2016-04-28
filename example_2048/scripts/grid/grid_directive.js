'use strict';

angular.module('Grid')
.directive('grid', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                ngModel: '='
            },
            templateUrl: 'gridId.html'
        };
    });