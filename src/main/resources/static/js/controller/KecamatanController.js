/**
 * Created by hackathon on 04.12.15.
 */

hackMdk3App.controller('KecamatanController', ['$scope', '$location',
    function ($scope, $location) {

        //view-model, this will be filled from database later...
        $scope.kecamatan = {
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

        if (($location.path() === '/kecamatan/dago') || ($location.path() === '/kecamatan/dago/informasi')) {
            $scope.kecamatan.title = 'Dago - Bandung';
            $scope.kecamatan.pageName = 'dago';

            $scope.kecamatan.name = 'Kantor Kecamatan Dago - Bandung';
            $scope.kecamatan.alamat = 'alamat kantor kecamatan Dago - bandung';
            $scope.kecamatan.jamBuka = 'jam buka kantor kecamatan dago - bandung';
            $scope.kecamatan.informasi = 'informasi untuk kantor kecamatan dago - bandung';
            $scope.kecamatan.reviewLink = 'link untuk kantor kecamatan dago - bandung';
            $scope.kecamatan.googleMaps.lat = '123 30303';
            $scope.kecamatan.googleMaps.lan = '123 03030';

        } else if ($location.path() === '/kecamatan/dago/review') {
            $scope.kecamatan.title = 'Dago - Bandung';
            $scope.kecamatan.pageName = 'dago';

            $scope.kecamatan.name = 'Kantor Kecamatan Dago - Bandung';
            $scope.kecamatan.alamat = 'alamat kantor kecamatan Dago - bandung';
            $scope.kecamatan.jamBuka = 'jam buka kantor kecamatan dago - bandung';
            $scope.kecamatan.informasi = 'review untuk kantor kecamatan dago - bandung';
            $scope.kecamatan.reviewLink = 'link untuk kantor kecamatan dago - bandung';
            $scope.kecamatan.googleMaps.lat = '123 30303';
            $scope.kecamatan.googleMaps.lan = '123 03030';
        } else if (($location.path() === '/kecamatan/ligar') || ($location.path() === '/kecamatan/ligar/informasi')) {
            $scope.kecamatan.title = 'Ligar - Bandung';
            $scope.kecamatan.pageName = 'ligar';

            $scope.kecamatan.name = 'Kantor Kecamatan Ligar - Bandung';
            $scope.kecamatan.alamat = 'alamat kantor kecamatan Ligar - bandung';
            $scope.kecamatan.jamBuka = 'jam buka kantor kecamatan Ligar - bandung';
            $scope.kecamatan.informasi = 'informasi untuk kantor kecamatan Ligar - bandung';
            $scope.kecamatan.reviewLink = 'link untuk kantor kecamatan Ligar - bandung';
            $scope.kecamatan.googleMaps.lat = '123 30303';
            $scope.kecamatan.googleMaps.lan = '123 03030';
        } else if ($location.path() === '/kecamatan/ligar/review') {
            $scope.kecamatan.title = 'Ligar - Bandung';
            $scope.kecamatan.pageName = 'ligar';

            $scope.kecamatan.name = 'Kantor Kecamatan Ligar - Bandung';
            $scope.kecamatan.alamat = 'alamat kantor kecamatan Ligar - bandung';
            $scope.kecamatan.jamBuka = 'jam buka kantor kecamatan Ligar - bandung';
            $scope.kecamatan.informasi = 'review untuk kantor kecamatan Ligar - bandung';
            $scope.kecamatan.reviewLink = 'link untuk kantor kecamatan Ligar - bandung';
            $scope.kecamatan.googleMaps.lat = '123 30303';
            $scope.kecamatan.googleMaps.lan = '123 03030';
        }

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    }]);