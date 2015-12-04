/**
 * Created by hackathon on 04.12.15.
 */

hackMdk3App.controller('PTSPController', ['$scope', '$location',
    function ($scope, $location) {

        //view-model, this will be filled from database later...
        $scope.ptsp = {
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

        $scope.isPTSPRootPage = false;

        if ($location.path() === '/ptsp') {
            $scope.isPTSPRootPage = true;

        }else if(($location.path() === '/ptsp/jakartaTimur') || ($location.path() === '/ptsp/jakartaTimur/informasi')) {
            $scope.ptsp.title = 'Jakarta Timur';
            $scope.ptsp.pageName = 'jakartaTimur';

            $scope.ptsp.name = 'PTSP Jakarta Timur';
            $scope.ptsp.alamat = 'alamat ptsp jakarta timur';
            $scope.ptsp.jamBuka = 'jam buka ptsp jakarta timur';
            $scope.ptsp.informasi = 'informasi jakarta timur';
            $scope.ptsp.reviewLink = 'link untuk jakarta timur';
            $scope.ptsp.googleMaps.lat = '123 9090';
            $scope.ptsp.googleMaps.lan = '123 9090';

        } else if ($location.path() === '/ptsp/jakartaTimur/review') {
            $scope.ptsp.title = 'Jakarta Timur Review';
            $scope.ptsp.pageName = 'jakartaTimur';

            $scope.ptsp.name = 'PTSP Jakarta Timur';
            $scope.ptsp.alamat = 'alamat ptsp jakarta timur';
            $scope.ptsp.jamBuka = 'jam buka ptsp jakarta timur';
            $scope.ptsp.informasi = 'review jakarta timur';
            $scope.ptsp.reviewLink = 'link untuk jakarta timur';
            $scope.ptsp.googleMaps.lat = 'xyz 123';
            $scope.ptsp.googleMaps.lan = 'xyz 123';

        } else if (($location.path() === '/ptsp/jakartaBarat') || ($location.path() === '/ptsp/jakartaBarat/informasi')) {
            $scope.ptsp.title = 'Jakarta Barat';
            $scope.ptsp.pageName = 'jakartaBarat';

            $scope.ptsp.name = 'PTSP Jakarta Barat';
            $scope.ptsp.alamat = 'alamat ptsp jakarta barat';
            $scope.ptsp.jamBuka = 'jam buka ptsp jakarta barat';
            $scope.ptsp.informasi = 'informasi jakarta barat';
            $scope.ptsp.reviewLink = 'link untuk jakarta barat';
            $scope.ptsp.googleMaps.lat = '123 123';
            $scope.ptsp.googleMaps.lan = '123 123';

        } else if ($location.path() === '/ptsp/jakartaBarat/review') {
            $scope.ptsp.title = 'Jakarta Barat Review';
            $scope.ptsp.pageName = 'jakartaBarat';

            $scope.ptsp.name = 'PTSP Jakarta Barat';
            $scope.ptsp.alamat = 'alamat ptsp jakarta barat';
            $scope.ptsp.jamBuka = 'jam buka ptsp jakarta barat';
            $scope.ptsp.informasi = 'review jakarta barat';
            $scope.ptsp.reviewLink = 'link untuk jakarta barat';
            $scope.ptsp.googleMaps.lat = '123 xyz';
            $scope.ptsp.googleMaps.lan = '123 xyz';
        }else {
            $scope.ptsp.title = 'PTSP Unknown...';
            $scope.ptsp.pageName = $location.url();

            $scope.ptsp.name = 'PTSP Unknown';
            $scope.ptsp.alamat = 'alamat ptsp Unknown';
            $scope.ptsp.jamBuka = 'jam buka ptsp Unknown';
            $scope.ptsp.informasi = 'review for ' + $location.path();
            $scope.ptsp.reviewLink = 'link untuk Unknown';
            $scope.ptsp.googleMaps.lat = '123 xyz';
            $scope.ptsp.googleMaps.lan = '123 xyz';
        }

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    }]);