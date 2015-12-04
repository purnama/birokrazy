/**
 * Created by hackathon on 04.12.15.
 */

hackMdk3App.controller('KecamatanController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.selected = undefined;

        if ($location.path() === '/kecamatan/dago') {
            $scope.title = 'Dago - Bandung';
            $scope.pageName = 'dago';

        } else if ($location.path() === '/kecamatan/ligar') {
            $scope.title = 'Ligar - Bandung';
            $scope.pageName = 'ligar';
        }

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    }]);