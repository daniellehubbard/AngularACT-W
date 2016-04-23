'use strict';


var listController = function($scope, $http) {
    $scope.restaurants = [];

    $http.get('/app/data/restaurants.json')
        .success(function(data) {
            for(var i=0;i<data.restaurants.length;i++) {
                $scope.restaurants.push(data.restaurants[i]);
            }
        });
};

listController.$inject = ['$scope', '$http'];

//many people will register controllers on a module within a separate file - just for simplicity I am doing it here instead
angular.module('myApp').controller('ListCtrl', listController);
