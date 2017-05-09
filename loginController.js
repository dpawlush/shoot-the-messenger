var loginController = function($scope, loginFactory) {
    $scope.loggedIn = false;
    
    $scope.validateUser = function(username, password) {
        console.log("Validate user login");
        loginFactory.login(username, password).then(
            function(response) {
                $scope.loggedIn = response.data.loggedIn;
            });
    };
    
};

loginController.$inject = ['$scope', 'loginFactory'];

angular.module('shootMessengerModule').controller('loginController', loginController);