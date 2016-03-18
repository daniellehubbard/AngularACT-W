angular.module('myApp')

.service('RestaurantRetrieverService', ['$http', function($http) {
    var self = this;

     self.getRestaurants = function() {
         var restaurants = [];
         $http.get('/app/data/restaurants.json')
             .success(function(data) {
                 for(var i=0;i<data.restaurants.length;i++) {
                     restaurants.push(data.restaurants[i]);
                 }
             });
         return restaurants;

     };

}]);