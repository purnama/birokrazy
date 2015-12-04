/**
 * Created by hackathon on 04.12.15.
 */

hackMdk3App.controller('PTSPController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.selected = undefined;

        if ($location.path() === '/ptsp/jakartaTimur') {
            $scope.title = 'Jakarta Timur';
            $scope.pageName = 'jakartaTimur';

        } else if ($location.path() === '/ptsp/jakartaBarat') {
            $scope.title = 'Jakarta Barat';
            $scope.pageName = 'jakartaBarat';
        }

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    }]);