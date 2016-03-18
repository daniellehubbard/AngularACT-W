'use strict';

angular.module('myApp')
.controller('ListCtrl', ['$scope', 'RestaurantRetrieverService', function($scope, restaurantRetrieverService) {

        $scope.restaurants = restaurantRetrieverService.getRestaurants();

}]);