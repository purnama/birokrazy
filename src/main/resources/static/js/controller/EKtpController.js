/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('EKtpController', ['$scope', '$location', function ($scope, $location) {

    if ($location.path() === '/e-ktp') {
        $scope.templateUrl = 'templates/e-ktp.info.tpl.html';
    } else if ($location.path() === '/e-ktp/informasi') {
        $scope.templateUrl = 'templates/e-ktp.info.tpl.html';
    } else if ($location.path() === '/e-ktp/persyaratan') {
        $scope.templateUrl = 'templates/e-ktp.persyaratan.tpl.html';
    } else if ($location.path() === '/e-ktp/proses') {
        $scope.templateUrl = 'templates/e-ktp.proses.tpl.html';
    }

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);