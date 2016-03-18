'use strict';

angular.module('myApp')

    .controller('SuggestionsCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.chosenRestaurant = '';
        var restaurants =  [];
            $http.get('/app/data/restaurants.json')
            .success(function(data) {
                for(var i=0;i<data.restaurants.length;i++) {
                    restaurants.push(data.restaurants[i]);
                }
            });

        $scope.suggest = function() {
            var num = Math.floor(Math.random() * (restaurants.length-1)) + 1;
            $scope.chosenRestaurant = restaurants[num].name;
        };


    }]);