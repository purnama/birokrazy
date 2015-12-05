/**
 * Created by hackathon on 04.12.15.
 */

hackMdk3App.controller('PTSPController', ['$scope', '$location',
    function ($scope, $location) {

        //view-model, this will be filled from database later...
        $scope.ptsp = {
            id: '',
            name : '',
            alamat : '',
            kodePos : '',
            telp : '',
            email : '',
            jamBuka : '',
            informasi : '',
            reviewLink : '',
            googleMaps : {
                lat : '',
                lan : ''
            },
            title : '',
            pageName : '',
            map: {
                zoom: 18,
                center: {
                    latitude: '-6.131836',
                    longitude: '106.747880'
                }
            },
        }

        var stringFromURL = $location.path().split('/');
        var selectedPage = stringFromURL[stringFromURL.length - 1];

        $scope.isPTSPFindPage = false;
        $scope.isPTSPInfoPage = false;
        $scope.isPTSPReviewPage = false;

        if ($location.path() === '/ptsp') {
            $scope.isPTSPRootPage = true;

        }else if(($location.path() === '/ptsp/kedaung') || ($location.path() === '/ptsp/kedaung/informasi')) {

            $scope.ptsp.title = 'Kedaung';
            $scope.ptsp.pageName = 'kedaung';

            $scope.ptsp.name = 'PTSP Kedaung';
            $scope.ptsp.alamat = 'alamat ptsp kedaung';
            $scope.ptsp.jamBuka = 'jam buka ptsp jakarta timur';
            $scope.ptsp.informasi = 'informasi jakarta timur';
            $scope.ptsp.reviewLink = 'link untuk jakarta timur';
            $scope.ptsp.googleMaps.lat = '123 9090';
            $scope.ptsp.googleMaps.lan = '123 9090';

            $scope.isPTSPInfoPage = true;
            $scope.isPTSPReviewPage = false;

        } else if ($location.path() === '/ptsp/kedaung/review') {

            $scope.ptsp.title = 'Kedaung Review';
            $scope.ptsp.pageName = 'kedaung';

            $scope.ptsp.name = 'PTSP Kedaung';
            $scope.ptsp.alamat = 'alamat ptsp kedaung';
            $scope.ptsp.jamBuka = 'jam buka ptsp jakarta timur';
            $scope.ptsp.informasi = 'review jakarta timur';
            $scope.ptsp.reviewLink = 'link untuk jakarta timur';
            $scope.ptsp.googleMaps.lat = 'xyz 123';
            $scope.ptsp.googleMaps.lan = 'xyz 123';

            $scope.isPTSPInfoPage = false;
            $scope.isPTSPReviewPage = true;

        } else if (($location.path() === '/ptsp/cengkarengBarat') || ($location.path() === '/ptsp/cengkarengBarat/informasi')) {

            $scope.ptsp.title = 'Jakarta Barat';
            $scope.ptsp.pageName = 'cengkarengBarat';

            $scope.ptsp.name = 'PTSP Jakarta Barat';
            $scope.ptsp.alamat = 'alamat ptsp jakarta barat';
            $scope.ptsp.jamBuka = 'jam buka ptsp jakarta barat';
            $scope.ptsp.informasi = 'informasi jakarta barat';
            $scope.ptsp.reviewLink = 'link untuk jakarta barat';
            $scope.ptsp.googleMaps.lat = '123 123';
            $scope.ptsp.googleMaps.lan = '123 123';

            $scope.isPTSPInfoPage = true;
            $scope.isPTSPReviewPage = false;

        } else if ($location.path() === '/ptsp/cengkarengBarat/review') {

            $scope.ptsp.title = 'Jakarta Barat Review';
            $scope.ptsp.pageName = 'cengkarengBarat';

            $scope.ptsp.name = 'PTSP Jakarta Barat';
            $scope.ptsp.alamat = 'alamat ptsp jakarta barat';
            $scope.ptsp.jamBuka = 'jam buka ptsp jakarta barat';
            $scope.ptsp.informasi = 'review jakarta barat';
            $scope.ptsp.reviewLink = 'link untuk jakarta barat';
            $scope.ptsp.googleMaps.lat = '123 xyz';
            $scope.ptsp.googleMaps.lan = '123 xyz';

            $scope.isPTSPInfoPage = false;
            $scope.isPTSPReviewPage = true;

        } else if (($location.path() === '/ptsp/rawaBuaya') || ($location.path() === '/ptsp/rawaBuaya/informasi')) {

            $scope.ptsp.title = 'Rawa Buaya';
            $scope.ptsp.pageName = 'rawaBuaya';

            $scope.ptsp.name = 'PTSP Rawa Buaya';
            $scope.ptsp.alamat = 'alamat ptsp jakarta barat';
            $scope.ptsp.jamBuka = 'jam buka ptsp jakarta barat';
            $scope.ptsp.informasi = 'informasi jakarta barat';
            $scope.ptsp.reviewLink = 'link untuk jakarta barat';
            $scope.ptsp.googleMaps.lat = '123 123';
            $scope.ptsp.googleMaps.lan = '123 123';

            $scope.isPTSPInfoPage = true;
            $scope.isPTSPReviewPage = false;

        } else if ($location.path() === '/ptsp/rawaBuaya/review') {

            $scope.ptsp.title = 'Rawa Buaya Review';
            $scope.ptsp.pageName = 'rawaBuaya';

            $scope.ptsp.name = 'PTSP Rawa Buaya';
            $scope.ptsp.alamat = 'alamat ptsp jakarta barat';
            $scope.ptsp.jamBuka = 'jam buka ptsp jakarta barat';
            $scope.ptsp.informasi = 'review jakarta barat';
            $scope.ptsp.reviewLink = 'link untuk jakarta barat';
            $scope.ptsp.googleMaps.lat = '123 xyz';
            $scope.ptsp.googleMaps.lan = '123 xyz';

            $scope.isPTSPInfoPage = false;
            $scope.isPTSPReviewPage = true;

        } else if (($location.path() === '/ptsp/duriKosambi') || ($location.path() === '/ptsp/duriKosambi/informasi')) {

            $scope.ptsp.title = 'Jakarta Barat';
            $scope.ptsp.pageName = 'duriKosambi';

            $scope.ptsp.name = 'PTSP Jakarta Barat';
            $scope.ptsp.alamat = 'alamat ptsp jakarta barat';
            $scope.ptsp.jamBuka = 'jam buka ptsp jakarta barat';
            $scope.ptsp.informasi = 'informasi jakarta barat';
            $scope.ptsp.reviewLink = 'link untuk jakarta barat';
            $scope.ptsp.googleMaps.lat = '123 123';
            $scope.ptsp.googleMaps.lan = '123 123';

            $scope.isPTSPInfoPage = true;
            $scope.isPTSPReviewPage = false;

        } else if ($location.path() === '/ptsp/duriKosambi/review') {

            $scope.ptsp.title = 'Jakarta Barat Review';
            $scope.ptsp.pageName = 'duriKosambi';

            $scope.ptsp.name = 'PTSP Jakarta Barat';
            $scope.ptsp.alamat = 'alamat ptsp jakarta barat';
            $scope.ptsp.jamBuka = 'jam buka ptsp jakarta barat';
            $scope.ptsp.informasi = 'review jakarta barat';
            $scope.ptsp.reviewLink = 'link untuk jakarta barat';
            $scope.ptsp.googleMaps.lat = '123 xyz';
            $scope.ptsp.googleMaps.lan = '123 xyz';

            $scope.isPTSPInfoPage = false;
            $scope.isPTSPReviewPage = true;

        } else if (($location.path() === '/ptsp/kapuk') || ($location.path() === '/ptsp/kapuk/informasi')) {

            $scope.ptsp.title = 'Jakarta Barat';
            $scope.ptsp.pageName = 'kapuk';

            $scope.ptsp.name = 'PTSP Jakarta Barat';
            $scope.ptsp.alamat = 'alamat ptsp jakarta barat';
            $scope.ptsp.jamBuka = 'jam buka ptsp jakarta barat';
            $scope.ptsp.informasi = 'informasi jakarta barat';
            $scope.ptsp.reviewLink = 'link untuk jakarta barat';
            $scope.ptsp.googleMaps.lat = '123 123';
            $scope.ptsp.googleMaps.lan = '123 123';

            $scope.isPTSPInfoPage = true;
            $scope.isPTSPReviewPage = false;

        } else if ($location.path() === '/ptsp/kapuk/review') {

            $scope.ptsp.title = 'Jakarta Barat Review';
            $scope.ptsp.pageName = 'kapuk';

            $scope.ptsp.name = 'PTSP Jakarta Barat';
            $scope.ptsp.alamat = 'alamat ptsp jakarta barat';
            $scope.ptsp.jamBuka = 'jam buka ptsp jakarta barat';
            $scope.ptsp.informasi = 'review jakarta barat';
            $scope.ptsp.reviewLink = 'link untuk jakarta barat';
            $scope.ptsp.googleMaps.lat = '123 xyz';
            $scope.ptsp.googleMaps.lan = '123 xyz';

            $scope.isPTSPInfoPage = false;
            $scope.isPTSPReviewPage = true;

        }else {

            $scope.ptsp.title = 'PTSP ' + selectedPage;
            $scope.ptsp.pageName = $location.url();

            $scope.ptsp.name = 'PTSP Unknown';
            $scope.ptsp.alamat = 'alamat ptsp Unknown';
            $scope.ptsp.jamBuka = 'jam buka ptsp Unknown';
            $scope.ptsp.informasi = 'review for ' + + selectedPage + ' from : ' + $location.path();
            $scope.ptsp.reviewLink = 'link untuk Unknown';
            $scope.ptsp.googleMaps.lat = '123 xyz';
            $scope.ptsp.googleMaps.lan = '123 xyz';

            $scope.isPTSPInfoPage = true;
            $scope.isPTSPReviewPage = false;

        }

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    }]);