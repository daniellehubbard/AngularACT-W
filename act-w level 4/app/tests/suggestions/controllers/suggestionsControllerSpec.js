//example based on https://docs.angularjs.org/guide/unit-testing
//you must install Karma to run - npm install karma
//then run by right clicking karma.conf.js and click "run'
//to run via command line, run "karma start" (may need to reference karma installation location)
//ex: $ ./node_modules/karma/bin/karma start

describe('suggestions controller', function() {

    //loads your project module into the test so you can access the controller
    beforeEach(module('myApp'));

    var $controller;

    //get angular's $controller service - this is how you do dependency injection for your test to use
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    //tests should read as a description of what they are doing - i.e "it should suggest a restaurant in the list"
    it('should suggest a restaurant in the list', function() {
        //set up mock varaibles
        var $scope = {};
        var restaurant = {
            "name": "Deschutes Brewery",
            "address": "2010 NW 11th Ave"
        };

        //tells angular to grab the controller registered with this name (this is the name you passed in when you did .controller)
        // and set the scope to your $scope variable
        var controller = $controller('SuggestionsCtrl', {$scope: $scope});

        //set scope variable to mocked data
        $scope.restaurants = [restaurant];

        //call the function we want to test
        $scope.suggest();

        //assert the expectation we have from the $scope.suggest function (that it will correctly set $scope.chosenRestaurant)
        expect($scope.chosenRestaurant).toEqual(restaurant);
    });
});
