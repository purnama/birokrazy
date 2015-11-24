var hackMdk3App = angular.module('hackMdk3App', [
    'ngRoute']);
hackMdk3App.constant('$apiVersion', {
    public : 'api/v1/public',
    protected: 'api/v1/protected'
});
hackMdk3App.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
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
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);

