/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
"use strict";
var administrationModule = angular.module('birokrazyApp.administrationModule', ['birokrazyApp.constant'])
    .config(['$routeProvider', '$constant',
        function ($routeProvider, $constant) {
            $routeProvider.
            when('/'+$constant.module.administration.path+'/'+$constant.module.service.path, {
                templateUrl: $constant.module.administration.templates + 'service.tpl.html',
                controller: 'administrationModule.ServiceController',
                access: {
                    requiresLogin: true,
                    permissions: [$constant.roles.admin]
                }
            }).
            when('/'+$constant.module.administration.path+'/'+$constant.module.service.path+'/new', {
                templateUrl: $constant.module.administration.templates + 'service.tpl.html',
                controller: 'administrationModule.ServiceController',
                access: {
                    requiresLogin: true,
                    permissions: [$constant.roles.admin]
                }
            }).
            when('/'+$constant.module.administration.path+'/'+$constant.module.service.path+'/edit/:name', {
                templateUrl: $constant.module.administration.templates + 'service.tpl.html',
                controller: 'administrationModule.ServiceController',
                access: {
                    requiresLogin: true,
                    permissions: [$constant.roles.admin]
                }
            });
        }]);
