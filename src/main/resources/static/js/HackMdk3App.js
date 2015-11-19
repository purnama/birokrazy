var hackMdk3App = angular.module('hackMdk3App', [
    'ngRoute']);

hackMdk3App.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({redirectTo: '/'});
}]);

