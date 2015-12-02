/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('EKtpController', ['$scope', '$location', '$constant', 'HighchartService', 'DurationModalService',
    function ($scope, $location, $constant, highchartService, durationModalService) {

        $scope.waitingTime = highchartService.waitingTime;
        $scope.duration = {
            modal: false,
            checked: false,
            units: $constant.duration.units,
            value: 2,
            unit: $constant.duration.minggu
        };

        if ($location.path() === '/e-ktp/review') {
            $scope.templateUrl = 'templates/include.review.tpl.html';
        } else if ($location.path() === '/e-ktp/trend') {
            $scope.templateUrl = 'templates/include.trend.tpl.html';
        } else if ($location.path() === '/e-ktp/proses') {
            $scope.templateUrl = 'templates/e-ktp.proses.tpl.html';
        } else if ($location.path() === '/e-ktp') {
            $scope.templateUrl = 'templates/e-ktp.info.tpl.html';
        }

        $scope.modalOpen = function () {
            durationModalService.open($scope);
        }

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    }]);