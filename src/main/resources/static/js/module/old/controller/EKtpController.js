/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
oldModule.controller('oldModule.EKtpController', ['$scope', '$location', '$constant', 'HighchartService', 'DurationModalService',
    'CivilServiceService',
    function ($scope, $location, $constant, highchartService, durationModalService, civilServiceService) {

        $scope.waitingTime = highchartService.waitingTime;

        civilServiceService.findById(1).then(function(data){
            $scope.civilService = data;
            if ($location.path() === '/'+$constant.module.old.path+'/e-ktp/review') {
                $scope.templateUrl = 'templates/include.review.tpl.html';
            } else if ($location.path() === '/'+$constant.module.old.path+'/e-ktp/trend') {
                $scope.templateUrl = 'templates/include.trend.tpl.html';
            } else if ($location.path() === '/'+$constant.module.old.path+'/e-ktp/proses') {
                $scope.templateUrl = $constant.module.old.templates+'e-ktp.proses.tpl.html';
            } else if ($location.path() === '/'+$constant.module.old.path+'/e-ktp') {
                $scope.templateUrl = $constant.module.old.templates+'e-ktp.info.tpl.html';
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
    }]);