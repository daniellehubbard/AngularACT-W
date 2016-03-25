angular.module('myApp')

.directive('restaurantDisplayDirective', function() {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/restaurantDisplayDirective.html',
        scope: {
            restaurant: "="
        }
    };



});