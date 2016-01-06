/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
"use strict";
departmentModule.controller('departmentModule.DepartmentController', ['$scope', '$location', '$constant', '$routeParams', 'HighchartService',
    'DurationModalService', 'DepartmentService',
    function ($scope, $location, $constant, $routeParams, highchartService, durationModalService, departmentService) {

        $scope.waitingTime = highchartService.waitingTime;
        $scope.department = {};
        $scope.modulePath = $constant.module.department.path;
        departmentService.findById($routeParams.name).then(function (data) {
            data.geoLocation = {
                latitude: data.latitude,
                longitude: data.longitude
            };
            $scope.department = data;
            $scope.departmentPath = $routeParams.name;
            if ($location.path() === '/' + $constant.module.department.path + '/' + $scope.departmentPath + '/review') {
                departmentService.findAllReviewById($routeParams.name).then(function (data) {
                    $scope.department.reviewList = data;
                    $scope.templateUrl = 'templates/include.review.tpl.html';
                });
            } else if ($location.path() === '/' + $constant.module.department.path + '/' + $scope.departmentPath + '/trend') {
                $scope.templateUrl = 'templates/include.trend.tpl.html';
            } else if ($location.path() === '/' + $constant.module.department.path + '/' + $scope.departmentPath + '/process') {
                $scope.templateUrl = 'templates/department.process.tpl.html';
            } else if ($location.path() === '/' + $constant.module.department.path + '/' + $scope.departmentPath) {
                $scope.templateUrl = $constant.module.department.templates + 'department.info.tpl.html';
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