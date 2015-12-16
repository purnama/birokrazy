"use strict";
var birokrazyApp = angular.module('birokrazyApp', [
        'ngRoute',
        'ngCookies',
        'ui.bootstrap',
        'uiGmapgoogle-maps',
        'colorpicker.module',
        'textAngular',
        'birokrazyApp.constant',
        'birokrazyApp.serviceModule',
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
            when('/e-ktp', {
                templateUrl: 'templates/e-ktp.tpl.html',
                controller: 'EKtpController'
            }).
            when('/e-ktp/review', {
                templateUrl: 'templates/e-ktp.tpl.html',
                controller: 'EKtpController'
            }).
            when('/e-ktp/trend', {
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
            when('/imb/proses', {
                templateUrl: 'templates/imb.tpl.html',
                controller: 'ImbController'
            }).
            when('/imb/review', {
                templateUrl: 'templates/imb.tpl.html',
                controller: 'ImbController'
            }).
            when('/imb/trend', {
                templateUrl: 'templates/imb.tpl.html',
                controller: 'ImbController'
            }).
            when('/imb/listDokumen', {
                templateUrl: 'templates/imb.tpl.html',
                controller: 'ImbController'
            }).
            when('/paspor', {
                templateUrl: 'templates/paspor.tpl.html',
                controller: 'PasporController'
            }).
            when('/paspor/proses', {
                templateUrl: 'templates/paspor.tpl.html',
                controller: 'PasporController'
            }).
            when('/paspor/review', {
                templateUrl: 'templates/paspor.tpl.html',
                controller: 'PasporController'
            }).
            when('/paspor/trend', {
                templateUrl: 'templates/paspor.tpl.html',
                controller: 'PasporController'
            }).
            when('/izin-usaha', {
                templateUrl: 'templates/izin-usaha.tpl.html',
                controller: 'IzinUsahaController'
            }).
            when('/izin-usaha/review', {
                templateUrl: 'templates/izin-usaha.tpl.html',
                controller: 'IzinUsahaController'
            }).
            when('/izin-usaha/trend', {
                templateUrl: 'templates/izin-usaha.tpl.html',
                controller: 'IzinUsahaController'
            }).
            when('/izin-usaha/proses', {
                templateUrl: 'templates/izin-usaha.tpl.html',
                controller: 'IzinUsahaController'
            }).
            when('/ptsp', {
                templateUrl: 'templates/ptsp.tpl.html',
                controller: 'PTSPController'
            }).
            when('/ptsp/:name*', {
                templateUrl: function (subPage) {
                    return 'templates/ptsp.tpl.html';
                },
                controller: 'PTSPController'
            }).
            when('/walikota', {
                templateUrl: 'templates/walikota.tpl.html',
                controller: 'WalikotaController'
            }).
            when('/walikota/:name*', {
                templateUrl: function (subPage) {
                    return 'templates/walikota.tpl.html';
                },
                controller: 'WalikotaController'
            }).
            when('/kecamatan', {
                templateUrl: 'templates/kecamatan.tpl.html',
                controller: 'KecamatanController'
            }).
            when('/kecamatan/:name*', {
                templateUrl: function (subPage) {
                    return 'templates/kecamatan.tpl.html';
                },
                controller: 'KecamatanController'
            }).
            when('/search/pelayanan', {
                templateUrl: 'templates/search.result.tpl.html',
                controller: 'SearchResultController'
            }).
            when('/search/instansi', {
                templateUrl: 'templates/search.result.tpl.html',
                controller: 'SearchResultController'
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
            when('/user', {
                templateUrl: $constant.templates.include,
                controller: 'UserController',
                access: {
                    requiresLogin: true,
                    permissions: [$constant.roles.admin]
                }
            }).
            when('/user/application', {
                templateUrl: 'templates/user.application.list.tpl.html',
                controller: 'UserController',
                access: {
                    requiresLogin: true,
                    permissions: [$constant.roles.admin, $constant.roles.user],
                    atLeastOne: true
                }
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
    .run(['$rootScope', '$constant', '$location', '$cookies',
        function ($rootScope, $constant, $location, $cookies) {
            $rootScope.$on('$routeChangeStart', function (event, next, current) {
                $rootScope.path = $location.path();
                $rootScope.showNavSearch = $location.path() !== '/';
                if (next.access !== undefined) {
                    if (next.access.requiresLogin) {
                        if ($cookies.getObject("authenticated")) {
                            $rootScope.authenticated = $cookies.getObject("authenticated");
                            $rootScope.user = $cookies.getObject("user");
                        }
                        if ($rootScope.authenticated) {
                            if (next.access.permissions === undefined || next.access.permissions.length === 0) {
                                event.preventDefault();
                                $location.path('/error/401').replace();
                            } else {
                                var loweredPermissions = [],
                                    hasPermission = true;
                                angular.forEach($rootScope.user.roles, function (userRole) {
                                    loweredPermissions.push(userRole.role.toLowerCase());
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
