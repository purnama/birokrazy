/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
"use strict";
administrationModule.controller('administrationModule.ServiceController', ['$scope', '$location', '$constant', '$routeParams',
    'CivilServiceService', 'AuthService',
    function ($scope, $location, $constant, $routeParams, civilServiceService, authService) {
        $scope.civilService = {};
        $scope.modulePath = $constant.module.administration.path;
        $scope.servicePath = $constant.module.service.path;
        authService.authorize($scope, function () {
            if ($location.path() === '/' + $scope.modulePath + '/' + $scope.servicePath) {
                civilServiceService.findAll().then(function (data) {
                    $scope.civilServiceList = data;
                    $scope.templateUrl = $constant.module.administration.templates + 'service.list.tpl.html';
                });
            } else if ($location.path() === '/' + $scope.modulePath + '/' + $scope.servicePath + '/edit') {
                civilServiceService.findById($routeParams.name).then(function (data) {
                    $scope.civilService = data;
                    $scope.templateUrl = $constant.module.administration.templates + 'service.edit.tpl.html';
                });
            }
        });



        $scope.duration = {
            modal: false,
            checked: false,
            units: $constant.duration.units,
            value: 2,
            unit: $constant.duration.minggu
        };


        $scope.modalOpen = function () {
            durationModalService.open($scope);
        };

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.counter = 0;
        $scope.maxbar = 4;
        $scope.currentBar = 0;
        $scope.currentWidth = '';

        $scope.Math = window.Math;

        $scope.isActiveStep2 = true;
        $scope.isActiveStep3 = true;
        $scope.isActiveStep4 = true;

        $scope.processCheckBox = function (confirmed) {
            if (confirmed) {
                $scope.counter++;
            } else {
                $scope.counter--;
            }

            $scope.currentBar = Math.floor(($scope.counter / $scope.maxbar ) * 100);
            $scope.currentWidth = 'width: ' + $scope.currentBar + '%';

            if ($scope.counter === 1) {
                $scope.isActiveStep2 = false;

            } else if ($scope.counter === 2) {
                $scope.isActiveStep3 = false;

            } else if ($scope.counter === 3) {
                $scope.isActiveStep4 = false;

            } else if ($scope.counter === 4) {
                $scope.isActiveStep5 = false;

            }
        };
    }
])
;