/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('EKtpController', ['$scope', '$location', 'HighchartService', function ($scope, $location, highchartService) {

    $scope.waitingTime = highchartService.waitingTime;

    if ($location.path() === '/e-ktp/review') {
        $scope.templateUrl = 'templates/include.review.tpl.html';
    }else if ($location.path() === '/e-ktp/trend') {
        $scope.templateUrl = 'templates/include.trend.tpl.html';
    }else if ($location.path() === '/e-ktp/proses') {
        $scope.templateUrl = 'templates/e-ktp.proses.tpl.html';
    }else if($location.path() === '/e-ktp') {
        $scope.templateUrl = 'templates/e-ktp.info.tpl.html';
    }

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

}]);