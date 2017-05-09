var loginFactory = function($http) {
    
    // create factory return object to hold methods
    var factory = {};
    
    factory.login = function (username, password) {
        return $http({
            method : 'POST',
            url : '/rest/login',
            data : {
                'username' : username,
                'password' : password
            },
            headers: {
                "Content-Type": "application/json"
            }
        });
    };
        
    return factory;
};

loginFactory.$inject = ['$http'];

angular.module('shootMessengerModule').factory('loginFactory', loginFactory);