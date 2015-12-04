/**
 * Created by hackathon on 04.12.15.
 */

hackMdk3App.controller('WalikotaController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.selected = undefined;

        if ($location.path() === '/walikota/bandung') {
            $scope.title = 'Bandung Raya';
            $scope.pageName = 'bandung';

        } else if ($location.path() === '/walikota/solo') {
            $scope.title = 'Solo';
            $scope.pageName = 'solo';
        }

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    }]);