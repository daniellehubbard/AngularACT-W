'use strict';

var suggestionsController = function($scope, $http) {
    $scope.chosenRestaurant = '';
    $scope.restaurants =  [];
    $http.get('/app/data/restaurants.json')
        .success(function(data) {
            for(var i=0;i<data.restaurants.length;i++) {
                $scope.restaurants.push(data.restaurants[i]);
            }
        });

    $scope.suggest = function() {
        var num = Math.floor(Math.random() * (($scope.restaurants.length-1) + 1));
        $scope.chosenRestaurant = $scope.restaurants[num].name;
    };
};

suggestionsController.$inject = ['$scope', '$http'];

//many people will register controllers on a module within a separate file - just for simplicity I am doing it here instead
angular.module('myApp').controller('SuggestionsCtrl', suggestionsController);
