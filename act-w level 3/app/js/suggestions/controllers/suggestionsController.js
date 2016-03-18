'use strict';

angular.module('myApp')

    .controller('SuggestionsCtrl', ['$scope', 'RestaurantRetrieverService', function($scope, restaurantRetrieverService) {
        $scope.chosenRestaurant = '';
        var restaurants = restaurantRetrieverService.getRestaurants();

        $scope.suggest = function() {
            var num = Math.floor(Math.random() * (restaurants.length-1)) + 1;
            $scope.chosenRestaurant = restaurants[num].name;
        };


    }]);