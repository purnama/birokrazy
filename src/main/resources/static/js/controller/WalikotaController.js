/**
 * Created by hackathon on 04.12.15.
 */

hackMdk3App.controller('WalikotaController', ['$scope', '$location',
    function ($scope, $location) {

        //view-model, this will be filled from database later...
        $scope.walikota = {
            name : '',
            alamat : '',
            jamBuka : '',
            informasi : '',
            reviewLink : '',
            googleMaps : {
                lat : '',
                lan : ''
            },
            title : '',
            pageName : '',
        }

        if (($location.path() === '/walikota/bandung') || ($location.path() === '/walikota/bandung/informasi')) {
            $scope.walikota.title = 'Bandung Raya';
            $scope.walikota.pageName = 'bandung';

            $scope.walikota.name = 'Kantor Walikota Bandung';
            $scope.walikota.alamat = 'alamat kantor walikota bandung';
            $scope.walikota.jamBuka = 'jam buka kantor walikota bandung';
            $scope.walikota.informasi = 'informasi untuk kantor walikota bandung';
            $scope.walikota.reviewLink = 'link untuk kantor walikota bandung';
            $scope.walikota.googleMaps.lat = '123 30303';
            $scope.walikota.googleMaps.lan = '123 03030';

        } else if ($location.path() === '/walikota/bandung/review') {
            $scope.walikota.title = 'Bandung Raya';
            $scope.walikota.pageName = 'bandung';

            $scope.walikota.name = 'Kantor Walikota Solo';
            $scope.walikota.alamat = 'alamat kantor walikota solo';
            $scope.walikota.jamBuka = 'jam buka kantor walikota solo';
            $scope.walikota.informasi = 'review untuk kantor walikota solo';
            $scope.walikota.reviewLink = 'link untuk kantor walikota solo';
            $scope.walikota.googleMaps.lat = '123 30303';
            $scope.walikota.googleMaps.lan = '123 03030';
        } else if (($location.path() === '/walikota/solo') || ($location.path() === '/walikota/solo/informasi')) {
            $scope.walikota.title = 'Solo';
            $scope.walikota.pageName = 'solo';

            $scope.walikota.name = 'Kantor Walikota Solo';
            $scope.walikota.alamat = 'alamat kantor walikota solo';
            $scope.walikota.jamBuka = 'jam buka kantor walikota solo';
            $scope.walikota.informasi = 'informasi untuk kantor walikota solo';
            $scope.walikota.reviewLink = 'link untuk kantor walikota solo';
            $scope.walikota.googleMaps.lat = '123 30303';
            $scope.walikota.googleMaps.lan = '123 03030';
        } else if ($location.path() === '/walikota/solo/review') {
            $scope.walikota.title = 'Solo';
            $scope.walikota.pageName = 'solo';

            $scope.walikota.name = 'Kantor Walikota Solo';
            $scope.walikota.alamat = 'alamat kantor walikota solo';
            $scope.walikota.jamBuka = 'jam buka kantor walikota solo';
            $scope.walikota.informasi = 'review untuk kantor walikota solo';
            $scope.walikota.reviewLink = 'link untuk kantor walikota solo';
            $scope.walikota.googleMaps.lat = '123 30303';
            $scope.walikota.googleMaps.lan = '123 03030';
        }

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    }]);