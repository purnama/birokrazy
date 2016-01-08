/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
var birokrazyApp = angular.module('birokrazyApp', [
        'ngRoute',
        'ngCookies',
        'ngStorage',
        'ui.bootstrap',
        'uiGmapgoogle-maps',
        'colorpicker.module',
        'textAngular',
        'birokrazyApp.constant',
        'birokrazyApp.oldModule',
        'birokrazyApp.serviceModule',
        'birokrazyApp.departmentModule',
        'birokrazyApp.administrationModule'])
    .config(['$routeProvider', '$locationProvider', '$httpProvider', '$constant', 'uiGmapGoogleMapApiProvider',
        function ($routeProvider, $locationProvider, $httpProvider, $constant, uiGmapGoogleMapApiProvider) {

            uiGmapGoogleMapApiProvider.configure({
                v: '3.20', //defaults to latest 3.X anyhow
                libraries: 'weather,geometry,visualization'
            });

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
            when('/demo', {
                templateUrl: 'templates/demo.tpl.html'
            }).
            when('/team', {
                templateUrl: 'templates/team.tpl.html'
            }).
            when('/error/404', {
                templateUrl: 'templates/404.tpl.html'
            }).
            when('/error/401', {
                templateUrl: 'templates/401.tpl.html'
            }).
            when('/error/403', {
                templateUrl: 'templates/403.tpl.html'
            }).
            otherwise({redirectTo: '/error/404'});

            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        }])
    .run(['$rootScope', '$constant', '$location', '$localStorage',
        function ($rootScope, $constant, $location, $localStorage) {
            $rootScope.$on('$routeChangeStart', function (event, next, current) {
                $rootScope.path = $location.path();
                $rootScope.showNavSearch = $location.path() !== '/';
                if (next.access !== undefined) {
                    if (next.access.requiresLogin) {
                        if ($localStorage.authenticated) {
                            $rootScope.authenticated = $localStorage.authenticated;
                            $rootScope.user = $localStorage.user;
                        }
                        if ($rootScope.authenticated) {
                            if (next.access.permissions === undefined || next.access.permissions.length === 0) {
                                event.preventDefault();
                                $location.path('/error/401').replace();
                            } else {
                                var loweredPermissions = [],
                                    hasPermission = true;
                                angular.forEach($rootScope.user.roles, function (userRole) {
                                    loweredPermissions.push(userRole.toLowerCase());
                                });
                                for (var i = 0; i < next.access.permissions.length; i += 1) {
                                    var permission = next.access.permissions[i].toLowerCase();
                                    if (!next.access.atLeastOne) {
                                        hasPermission = hasPermission && loweredPermissions.indexOf(permission) > -1;
                                        // if all the permissions are required and hasPermission is false there is no point carrying on
                                        if (hasPermission === false) {
                                            event.preventDefault();
                                            $location.path('/error/403').replace();
                                        }
                                    } else if (next.access.atLeastOne) {
                                        hasPermission = loweredPermissions.indexOf(permission) > -1;
                                        // if we only need one of the permissions and we have it there is no point carrying on
                                        if (hasPermission) {
                                            break;
                                        }
                                    }
                                }
                                if (hasPermission === false) {
                                    event.preventDefault();
                                    $location.path('/error/403').replace();
                                }
                            }
                        } else {
                            if (next.templateUrl !== $constant.templates.login) {
                                event.preventDefault();
                                $rootScope.loginRedirect = next.$$route.originalPath;
                                $location.path($constant.routes.login).replace();
                            }
                        }
                    }
                }

            });
        }]);
