/**
 * Created by hackathon on 04.12.15.
 */
oldModule.controller('oldModule.PTSPController', ['$scope', '$location', '$constant', 'CivilServiceService', 'HighchartService',
    function ($scope, $location, $constant, civilServiceService, highchartService) {

        $scope.waitingTime = highchartService.waitingTime;

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
        };

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

            $scope.ptsp.id= '1';
            $scope.ptsp.nama = 'PTSP Kedaung';
            $scope.ptsp.alamat =  'Jl. Komplek Departemen Agama, Kedaung Kali Angke';
            $scope.ptsp.kodePos = 'Jakarta Barat, 10011';
            $scope.ptsp.telp = 'Telp. 021-112233';
            $scope.ptsp.email = 'Email: ptsp-kedaung@jakarta-barat.id';
            $scope.ptsp.jamBuka = 'Senin - Jumat 09:00 - 17:00';
            $scope.ptsp.map.center.latitude = '-6.153593';
            $scope.ptsp.map.center.longitude = '106.762150';

            $scope.ptsp.link= 'ptsp/kedaung';

            $scope.isPTSPInfoPage = true;
            $scope.isPTSPReviewPage = false;

        } else if ($location.path() === '/ptsp/kedaung/review') {

            $scope.ptsp.title = 'Kedaung';
            $scope.ptsp.pageName = 'kedaung';

            $scope.ptsp.id= '1';
            $scope.ptsp.nama = 'PTSP Kedaung';
            $scope.ptsp.alamat =  'Jl. Komplek Departemen Agama, Kedaung Kali Angke';
            $scope.ptsp.kodePos = 'Jakarta Barat, 10011';
            $scope.ptsp.telp = 'Telp. 021-112233';
            $scope.ptsp.email = 'Email: ptsp-kedaung@jakarta-barat.id';
            $scope.ptsp.jamBuka = 'Senin - Jumat 09:00 - 17:00';
            $scope.ptsp.map.center.latitude = '-6.153593';
            $scope.ptsp.map.center.longitude = '106.762150';

            $scope.ptsp.link= 'ptsp/kedaung';

            $scope.isPTSPInfoPage = false;
            $scope.isPTSPReviewPage = true;

        } else if (($location.path() === '/ptsp/cengkarengBarat') || ($location.path() === '/ptsp/cengkarengBarat/informasi')) {

            $scope.ptsp.title = 'Cengkareng Barat';
            $scope.ptsp.pageName = 'cengkarengBarat';

            $scope.ptsp.id = '3';
            $scope.ptsp.nama = 'PTSP Cengkareng Barat';
            $scope.ptsp.alamat = 'Jl. Utama Raya No.42, Cengkareng';
            $scope.ptsp.kodePos = 'Jakarta Barat, 11730';
            $scope.ptsp.telp ='Telp. 021-121212';
            $scope.ptsp.email = 'Email: ptsp-cengkareng-barat@jakarta-barat.id';
            $scope.ptsp.jamBuka = 'Senin - Jumat 09:00 - 17:00';
            $scope.ptsp.map.center.latitude = '-6.149574';
            $scope.ptsp.map.center.longitude = '106.721845';
            $scope.ptsp.link = 'ptsp/cengkarengBarat';

            $scope.isPTSPInfoPage = true;
            $scope.isPTSPReviewPage = false;

        } else if ($location.path() === '/ptsp/cengkarengBarat/review') {

            $scope.ptsp.title = 'Cengkareng Barat';
            $scope.ptsp.pageName = 'cengkarengBarat';

            $scope.ptsp.id = '3';
            $scope.ptsp.nama = 'PTSP Cengkareng Barat';
            $scope.ptsp.alamat = 'Jl. Utama Raya No.42, Cengkareng';
            $scope.ptsp.kodePos = 'Jakarta Barat, 11730';
            $scope.ptsp.telp ='Telp. 021-121212';
            $scope.ptsp.email = 'Email: ptsp-cengkareng-barat@jakarta-barat.id';
            $scope.ptsp.jamBuka = 'Senin - Jumat 09:00 - 17:00';
            $scope.ptsp.map.center.latitude = '-6.149574';
            $scope.ptsp.map.center.longitude = '106.721845';
            $scope.ptsp.link = 'ptsp/cengkarengBarat';

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
            $scope.ptsp.informasi = 'review for ' + selectedPage + ' from : ' + $location.path();
            $scope.ptsp.reviewLink = 'link untuk Unknown';
            $scope.ptsp.googleMaps.lat = '123 xyz';
            $scope.ptsp.googleMaps.lan = '123 xyz';

            $scope.isPTSPInfoPage = true;
            $scope.isPTSPReviewPage = false;

        }

        if($location.path().indexOf('trend') !== 0){
            var stringArray = $location.path().split('/');
            $scope.ptsp.pageName = stringArray[3];
        }

        civilServiceService.findById(1).then(function(data){
            $scope.civilService = data;
            if($location.path() === '/'+$constant.module.old.path+'/ptsp/'+$scope.ptsp.pageName+'/informasi' ||
                $location.path() === '/'+$constant.module.old.path+'/ptsp/'+$scope.ptsp.pageName
            ){
                $scope.templateUrl = $constant.module.old.templates+'ptsp.info.tpl.html';
            }else if ($location.path() === '/'+$constant.module.old.path+'/ptsp/'+$scope.ptsp.pageName+'/review'){
                $scope.templateUrl = 'templates/include.review.tpl.html';
            }else if ($location.path() === '/'+$constant.module.old.path+'/ptsp/'+$scope.ptsp.pageName+'/trend'){
                $scope.templateUrl = 'templates/include.trend.tpl.html';
            }
        });

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    }]);