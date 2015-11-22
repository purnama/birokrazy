var hackMdk3App = angular.module('hackMdk3App', [
    'ngRoute']);

hackMdk3App.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
    when('/', {
        templateUrl: 'templates/index.tpl.html',
        controller: 'IndexController'
    }).
    when('/login', {
        templateUrl: 'templates/login.tpl.html',
        controller: 'LoginController'
    }).
    when('/about', {
        templateUrl: 'templates/about.tpl.html',
        controller: 'AboutController'
    }).
    otherwise({redirectTo: '/404.html'});
}]);

