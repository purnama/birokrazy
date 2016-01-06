/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
"use strict";
administrationModule.controller('administrationModule.DepartmentController', ['$scope', '$location', '$constant', '$routeParams',
    'DepartmentService',
    function ($scope, $location, $constant, $routeParams, departmentService) {
        $scope.department = {};
        $scope.modulePath = $constant.module.administration.path;
        $scope.departmentPath = $constant.module.department.path;
        $scope.pathParamName = $routeParams.name;
        if ($location.path() === '/' + $scope.modulePath + '/' + $scope.departmentPath) {
            departmentService.findAll().then(function (data) {
                $scope.departmentList = data;
                $scope.templateUrl = $constant.module.administration.templates + 'department.list.tpl.html';
            });
        } else if ($location.path() === '/' + $scope.modulePath + '/' + $scope.departmentPath + '/' + $routeParams.name) {
            departmentService.findById($routeParams.name).then(function (data) {
                $scope.department = data;
                $scope.submitAction = function () {
                    departmentService.update($routeParams.name, $scope.department).then(function (data) {
                        $location.path('/' + $scope.modulePath + '/' + $scope.departmentPath);
                    });
                };
                $scope.templateUrl = $constant.module.administration.templates + 'department.edit.tpl.html';
            });
        } else if ($location.path() === '/' + $scope.modulePath + '/new/' + $scope.departmentPath ) {
            $scope.department = {};
            $scope.submitAction = function () {
                departmentService.create($scope.department).then(function (data) {
                    $location.path('/' + $scope.modulePath + '/' + $scope.departmentPath);
                });
            };
            $scope.templateUrl = $constant.module.administration.templates + 'department.edit.tpl.html';
        }

        $scope.delete = function(department){
            departmentService.delete(department.uniqueName).then(function (data) {
                $scope.departmentList.splice($scope.departmentList.indexOf(department), 1);
            });
        }

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    }
])
;