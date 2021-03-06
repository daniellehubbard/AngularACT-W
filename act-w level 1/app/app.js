'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/suggestions', {
        templateUrl: 'js/suggestions/templates/suggestions.html',
        controller: 'SuggestionsCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/suggestions'});

}]);
