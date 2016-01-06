/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
"use strict";
var departmentModule = angular.module('birokrazyApp.departmentModule', ['birokrazyApp.constant'])
    .config(['$routeProvider', '$constant',
        function ($routeProvider, $constant) {
            $routeProvider.
            when('/'+$constant.module.department.path, {
                templateUrl: $constant.module.department.templates+'department.list.tpl.html',
                controller: 'departmentModule.DepartmentController'
            }).
            when('/'+$constant.module.department.path+'/:name', {
                templateUrl: $constant.module.department.templates+'department.tpl.html',
                controller: 'departmentModule.DepartmentController'
            }).
            when('/'+$constant.module.department.path+'/:name/review', {
                templateUrl: $constant.module.department.templates+'department.tpl.html',
                controller: 'departmentModule.DepartmentController'
            }).
            when('/'+$constant.module.department.path+'/:name/trend', {
                templateUrl: $constant.module.department.templates+'department.tpl.html',
                controller: 'departmentModule.DepartmentController'
            }).
            when('/'+$constant.module.department.path+'/:name/process', {
                templateUrl: $constant.module.department.templates+'department.tpl.html',
                controller: 'departmentModule.DepartmentController'
            });
        }]);
