angular.module('myApp')

.directive('restaurantDisplayDirective', function() {

    var restaurantDisplayDirectiveController = function() {
        //this is mostly just here for example to show you how to put a controller in your directive
        //you can add directive specific behaviors here - anything your directive should calculate, functions it should run,etc
        //docs for directives can be found here: https://docs.angularjs.org/guide/directive
    };

    return {
        controller: restaurantDisplayDirectiveController,
        restrict: 'E',
        templateUrl: 'js/common/directives/restaurantDisplayDirective.html',
        scope: {
            restaurant: "="
        }
    };



});