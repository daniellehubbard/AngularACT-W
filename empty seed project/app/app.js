'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/example', {
        templateUrl: 'js/example/templates/exampleTemplate.html',
        controller: 'ExampleCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/example'});

}]);
