'use strict';

var suggestionsController = function($scope) {
    $scope.chosenRestaurant = '';
    $scope.restaurants = ['Screen Door', 'Pok Pok', 'Bollywood Theater', 'Lardo', 'Deschutes Brewery', 'Laughing Planet', 'Chipotle', 'McDonalds'];

    $scope.suggest = function() {
        var num = Math.floor(Math.random() * (($scope.restaurants.length-1) + 1));
        $scope.chosenRestaurant = $scope.restaurants[num];
    };
};

suggestionsController.$inject = ['$scope'];

//many people will register controllers on a module within a separate file - just for simplicity I am doing it here instead
angular.module('myApp').controller('SuggestionsCtrl', suggestionsController);
