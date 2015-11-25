var hackMdk3App = angular.module('hackMdk3App', [
    'ngRoute']);
hackMdk3App.constant('$constant', {
    apiVersion: {
        public: 'api/v1/public',
        protected: 'api/v1/protected'
    },
    templates: {
        login: 'templates/login.tpl.html'
    },
    routes: {
        index: '/',
        login: '/login'
    },
    authorised: {
        loginRequired: 'LOGIN_REQUIRED',
        notAuthorised: 'NOT_AUTHORISED',
        authorised: 'AUTHORISED'
    }
});
hackMdk3App.config(['$routeProvider', '$locationProvider', '$httpProvider', '$constant',
    function ($routeProvider, $locationProvider, $httpProvider, $constant) {
        $locationProvider.html5Mode(true);
        $routeProvider.
        when($constant.routes.index, {
            templateUrl: 'templates/index.tpl.html',
            controller: 'IndexController'
        }).
        when($constant.routes.login, {
            templateUrl: $constant.templates.login,
            controller: 'AuthController'
        }).
        when('/about', {
            templateUrl: 'templates/about.tpl.html',
            controller: 'AboutController'
        }).
        when('/user', {
            templateUrl: 'templates/user.tpl.html',
            controller: 'UserController',
            access: {
                requiresLogin: true
            }
        }).
        otherwise({redirectTo: '/404.html'});
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    }]).run(['$rootScope', '$location', '$constant', 'AuthService',
    function ($rootScope, $location, $constant, authService) {
        // register listener to watch route changes
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            var authorised;
            authService.authenticate(undefined, function () {
                if (next.access !== undefined) {
                    authorised = authService.authorize(next.access.requiresLogin,
                        next.access.permissions,
                        next.access.atLeastOne);
                    if (authorised === $constant.authorised.loginRequired) {
                        next.templateUrl = $constant.templates.login;
                    } else if (authorised === $constant.authorised.notAuthorised) {
                        next.templateUrl = 'templates/401.tpl.html';
                    }
                }
                if ($rootScope.authenticated &&
                    (next.templateUrl === $constant.templates.login ||
                    (current !== undefined && current.templateUrl === $constant.templates.login))) {
                    $location.path($constant.routes.index);
                }
            });

        })
    }]);

