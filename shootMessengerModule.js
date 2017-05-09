var router = function($routeProvider) {
    $routeProvider.otherwise({
        templateUrl : '/view/login.html',
        controller : 'loginController'
    });
}

router.$inject = ['$routeProvider'];

var app = angular.module('shootMessengerModule', ['ngRoute']);
app.config(router);