/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
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
            when('/'+$constant.module.administration.path+'/new/'+$constant.module.service.path, {
                templateUrl: $constant.module.administration.templates + 'service.tpl.html',
                controller: 'administrationModule.ServiceController',
                access: {
                    requiresLogin: true,
                    permissions: [$constant.roles.admin]
                }
            }).
            when('/'+$constant.module.administration.path+'/'+$constant.module.service.path+'/:name', {
                templateUrl: $constant.module.administration.templates + 'service.tpl.html',
                controller: 'administrationModule.ServiceController',
                access: {
                    requiresLogin: true,
                    permissions: [$constant.roles.admin]
                }
            }).
            when('/'+$constant.module.administration.path+'/'+$constant.module.department.path, {
                templateUrl: $constant.module.administration.templates + 'department.tpl.html',
                controller: 'administrationModule.DepartmentController',
                access: {
                    requiresLogin: true,
                    permissions: [$constant.roles.admin]
                }
            }).
            when('/'+$constant.module.administration.path+'/new/'+$constant.module.department.path, {
                templateUrl: $constant.module.administration.templates + 'department.tpl.html',
                controller: 'administrationModule.DepartmentController',
                access: {
                    requiresLogin: true,
                    permissions: [$constant.roles.admin]
                }
            }).
            when('/'+$constant.module.administration.path+'/'+$constant.module.department.path+'/:name', {
                templateUrl: $constant.module.administration.templates + 'department.tpl.html',
                controller: 'administrationModule.DepartmentController',
                access: {
                    requiresLogin: true,
                    permissions: [$constant.roles.admin]
                }
            });
        }]);
