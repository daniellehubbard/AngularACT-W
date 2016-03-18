'use strict';

angular.module('myApp')
.controller('ListCtrl', ['$scope', '$http', function($scope, $http) {

        $scope.restaurants = [];

        $http.get('/app/data/restaurants.json')
        .success(function(data) {
            for(var i=0;i<data.restaurants.length;i++) {
                $scope.restaurants.push(data.restaurants[i]);
            }
        });

}]);