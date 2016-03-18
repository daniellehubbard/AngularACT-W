'use strict';

angular.module('myApp')

    .controller('SuggestionsCtrl', ['$scope', function($scope) {
        $scope.chosenRestaurant = '';
        var restaurants = ['Screen Door', 'Pok Pok', 'Bollywood Theater', 'Lardo', 'Deschutes Brewery', 'Laughing Planet', 'Chipotle', 'McDonalds'];

        $scope.suggest = function() {
            var num = Math.floor(Math.random() * (restaurants.length-1)) + 1;
            $scope.chosenRestaurant = restaurants[num];
        };
    }]);