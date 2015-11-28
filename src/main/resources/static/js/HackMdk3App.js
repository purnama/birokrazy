var hackMdk3App = angular.module('hackMdk3App', [
    'ngRoute',
    'ngCookies']);
hackMdk3App.constant('$constant', {
    apiVersion: {
        public: 'api/v1/public',
        protected: 'api/v1/protected'
    },
    templates: {
        login: 'templates/login.tpl.html',
        include: 'templates/include.tpl.html',
        error401: 'templates/401.tpl.html',
        error403: 'templates/403.tpl.html',
        error404: 'templates/404.tpl.html',
        error500: 'templates/500.tpl.html',
        error520: 'templates/520.tpl.html'
    },
    routes: {
        index: '/',
        login: '/login'
    },
    roles: {
        admin: 'ADMINISTRATOR',
        user: 'USER',
        official: 'OFFICIAL'
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
            controller: 'LoginController'
        }).
        when('/e-ktp', {
            templateUrl: 'templates/e-ktp.tpl.html',
            controller: 'EKtpController'
        }).
        when('/e-ktp/informasi', {
            templateUrl: 'templates/e-ktp.tpl.html',
            controller: 'EKtpController'
        }).
        when('/e-ktp/persyaratan', {
            templateUrl: 'templates/e-ktp.tpl.html',
            controller: 'EKtpController'
        }).
        when('/e-ktp/proses', {
            templateUrl: 'templates/e-ktp.tpl.html',
            controller: 'EKtpController'
        }).
        when('/imb', {
            templateUrl: 'templates/imb.tpl.html',
            controller: 'ImbController'
        }).
        when('/imb/persyaratan', {
            templateUrl: 'templates/imb.tpl.html',
            controller: 'ImbController'
        }).
        when('/imb/proses', {
            templateUrl: 'templates/imb.tpl.html',
            controller: 'ImbController'
        }).
        when('/imb/deskripsi', {
            templateUrl: 'templates/imb.tpl.html',
            controller: 'ImbController'
        }).
        when('/imb/lokasi', {
            templateUrl: 'templates/imb.tpl.html',
            controller: 'ImbController'
        }).
        when('/imb/statistik', {
            templateUrl: 'templates/imb.tpl.html',
            controller: 'ImbController'
        }).

        when('/izinUsaha', {
            templateUrl: 'templates/e-ktp.tpl.html',
        }).
        when('/official', {
            templateUrl: $constant.templates.include,
            controller: 'OfficialController',
            access: {
                requiresLogin: true,
                permissions: [$constant.roles.admin, $constant.roles.official],
                atLeastOne: true
            }
        }).
        when('/requirement', {
            templateUrl: $constant.templates.include,
            controller: 'RequirementController',
            access: {
                requiresLogin: true,
                permissions: [$constant.roles.admin, $constant.roles.user],
                atLeastOne: true
            }
        }).
        when('/user', {
            templateUrl: $constant.templates.include,
            controller: 'UserController',
            access: {
                requiresLogin: true,
                permissions: [$constant.roles.admin]
            }
        }).
        otherwise({redirectTo: '/error/404.html'});
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    }]);

