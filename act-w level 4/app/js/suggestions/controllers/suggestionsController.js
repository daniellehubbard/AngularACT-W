'use strict';

angular.module('myApp')

    .controller('SuggestionsCtrl', ['$scope', 'RestaurantRetrieverService', function($scope, restaurantRetrieverService) {
        $scope.chosenRestaurant = '';
        $scope.restaurants = restaurantRetrieverService.getRestaurants();

        $scope.suggest = function() {
            var num = Math.floor(Math.random() * (($scope.restaurants.length-1) + 1));
            $scope.chosenRestaurant = $scope.restaurants[num];
        };


    }]);