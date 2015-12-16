/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
"use strict";
administrationModule.controller('administrationModule.ServiceController', ['$scope', '$location', '$constant', '$routeParams',
    'CivilServiceService',
    function ($scope, $location, $constant, $routeParams, civilServiceService) {
        $scope.civilService = {};
        $scope.modulePath = $constant.module.administration.path;
        $scope.servicePath = $constant.module.service.path;
        $scope.pathParamName = $routeParams.name;
        if ($location.path() === '/' + $scope.modulePath + '/' + $scope.servicePath) {
            civilServiceService.findAll().then(function (data) {
                $scope.civilServiceList = data;
                $scope.templateUrl = $constant.module.administration.templates + 'service.list.tpl.html';
            });
        } else if ($location.path() === '/' + $scope.modulePath + '/' + $scope.servicePath + '/' + $routeParams.name) {
            civilServiceService.findById($routeParams.name).then(function (data) {
                $scope.civilService = data;
                $scope.submitAction = function () {
                    civilServiceService.update($routeParams.name, $scope.civilService).then(function (data) {
                        $location.path('/' + $scope.modulePath + '/' + $scope.servicePath);
                    });
                };
                $scope.templateUrl = $constant.module.administration.templates + 'service.edit.tpl.html';
            });
        } else if ($location.path() === '/' + $scope.modulePath + '/new/' + $scope.servicePath ) {
            $scope.civilService = {};
            $scope.submitAction = function () {
                civilServiceService.create($scope.civilService).then(function (data) {
                    $location.path('/' + $scope.modulePath + '/' + $scope.servicePath);
                });
            };
            $scope.templateUrl = $constant.module.administration.templates + 'service.edit.tpl.html';
        }

        $scope.delete = function(civilService){
            civilServiceService.delete(civilService.uniqueName).then(function (data) {
                $scope.civilServiceList.splice($scope.civilServiceList.indexOf(civilService), 1);
            });
        }

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    }
])
;