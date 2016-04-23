'use strict';

var suggestionsController = function($scope, restaurantRetrieverService) {
    $scope.chosenRestaurant = '';
    $scope.restaurants = restaurantRetrieverService.getRestaurants();

    $scope.suggest = function() {
        var num = Math.floor(Math.random() * (($scope.restaurants.length-1) + 1));
        $scope.chosenRestaurant = $scope.restaurants[num];
    };
};

suggestionsController.$inject = ['$scope', 'RestaurantRetrieverService'];

angular.module('myApp').controller('SuggestionsCtrl', suggestionsController);
