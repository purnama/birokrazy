/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
"use strict";
serviceModule.controller('serviceModule.ServiceController', ['$scope', '$location', '$constant', '$routeParams', 'HighchartService',
    'DurationModalService', 'CivilServiceService',
    function ($scope, $location, $constant, $routeParams, highchartService, durationModalService, civilServiceService) {

        function chunk(arr, size) {
            var newArr = [];
            for (var i=0; i<arr.length; i+=size) {
                newArr.push(arr.slice(i, i+size));
            }
            return newArr;
        }

        $scope.waitingTime = highchartService.waitingTime;
        $scope.civilService = {};
        $scope.modulePath = $constant.module.service.path;
        civilServiceService.findById($routeParams.name).then(function (data) {
            $scope.civilService = data;
            $scope.civilService.infographicList = chunk($scope.civilService.infographicList, 4);
            $scope.servicePath = $routeParams.name;
            if ($location.path() === '/' + $constant.module.service.path + '/' + $scope.servicePath + '/review') {
                civilServiceService.findAllReviewById($routeParams.name).then(function (data) {
                    $scope.civilService.reviewList = data;
                    $scope.templateUrl = 'templates/include.review.tpl.html';
                });
            } else if ($location.path() === '/' + $constant.module.service.path + '/' + $scope.servicePath + '/trend') {
                $scope.templateUrl = 'templates/include.trend.tpl.html';
            } else if ($location.path() === '/' + $constant.module.service.path + '/' + $scope.servicePath + '/process') {
                $scope.templateUrl = 'templates/service.process.tpl.html';
            } else if ($location.path() === '/' + $constant.module.service.path + '/' + $scope.servicePath) {
                $scope.templateUrl = $constant.module.service.templates + 'service.info.tpl.html';
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