'use strict';

var listController = function($scope, restaurantRetrieverService) {
    $scope.restaurants = restaurantRetrieverService.getRestaurants();

};

listController.$inject = ['$scope', 'RestaurantRetrieverService'];

angular.module('myApp').controller('ListCtrl', listController);
