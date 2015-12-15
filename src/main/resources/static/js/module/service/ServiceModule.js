/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
"use strict";
var serviceModule = angular.module('birokrazyApp.serviceModule', ['birokrazyApp.constant'])
    .config(['$routeProvider', '$constant',
        function ($routeProvider, $constant) {
            $routeProvider.
            when('/'+$constant.module.service.path, {
                templateUrl: $constant.module.service.templates+'service.list.tpl.html',
                controller: 'serviceModule.ServiceController'
            }).
            when('/'+$constant.module.service.path+'/:name', {
                templateUrl: $constant.module.service.templates+'service.tpl.html',
                controller: 'serviceModule.ServiceController'
            }).
            when('/'+$constant.module.service.path+'/:name/review', {
                templateUrl: $constant.module.service.templates+'service.tpl.html',
                controller: 'serviceModule.ServiceController'
            }).
            when('/'+$constant.module.service.path+'/:name/trend', {
                templateUrl: $constant.module.service.templates+'service.tpl.html',
                controller: 'serviceModule.ServiceController'
            }).
            when('/'+$constant.module.service.path+'/:name/process', {
                templateUrl: $constant.module.service.templates+'service.tpl.html',
                controller: 'serviceModule.ServiceController'
            });
        }]);
