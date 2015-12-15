/**
 * Created by hackathon on 04.12.15.
 */

birokrazyApp.controller('WalikotaController', ['$scope', '$location', 'CivilServiceService', 'HighchartService',
    function ($scope, $location, civilServiceService, highchartService) {

        $scope.waitingTime = highchartService.waitingTime;

        //view-model, this will be filled from database later...
        $scope.walikota = {
            id:'',
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
            map: {
                zoom: 18,
                center: {
                    latitude: '-6.131836',
                    longitude: '106.747880'
                }
            },
            telp: '',
            email: '',
        };

        $scope.isWalikotaFindPage = false;
        $scope.isWalikotaInfoPage = false;
        $scope.isWalikotaReviewPage = false;

        if ($location.path() === '/walikota') {
            $scope.isWalikotaFindPage = true;

        }else if (($location.path() === '/walikota/bekasi') || ($location.path() === '/walikota/bekasi/informasi')) {
            $scope.walikota.title = 'Bekasi';
            $scope.walikota.pageName = 'bekasi';

            $scope.walikota.name = 'Kantor Walikota Bekasi';
            $scope.walikota.alamat = 'Jl. Jendral Ahmad Yani No. 1 Bekasi Selatan';
            $scope.walikota.kodePos = '17141';
            $scope.walikota.telp = '(021) 88960250-3200. 88342729';
            $scope.walikota.email = 'info@bekasikota.go.id';

            $scope.walikota.reviewLink = 'link untuk kantor walikota bekasi';

            $scope.walikota.map.center.latitude = '-6.2419722';
            $scope.walikota.map.center.longitude = '106.9931039';

            $scope.isWalikotaInfoPage = true;
            $scope.isWalikotaReviewPage = false;

        } else if ($location.path() === '/walikota/bekasi/review') {
            $scope.walikota.title = 'Bekasi';
            $scope.walikota.pageName = 'bekasi';

            $scope.walikota.name = 'Kantor Walikota Bekasi';
            $scope.walikota.alamat = 'Jl. Jendral Ahmad Yani No. 1 Bekasi Selatan';
            $scope.walikota.kodePos = '17141';
            $scope.walikota.telp = '(021) 88960250-3200. 88342729';
            $scope.walikota.email = 'info@bekasikota.go.id';

            $scope.walikota.reviewLink = 'link untuk kantor walikota bekasi';

            $scope.walikota.map.center.latitude = '-6.2419722';
            $scope.walikota.map.center.longitude = '106.9931039';

            $scope.isWalikotaInfoPage = false;
            $scope.isWalikotaReviewPage = true;

        } else if (($location.path() === '/walikota/cilegon') || ($location.path() === '/walikota/cilegon/informasi')) {
            $scope.walikota.title = 'Cilegon';
            $scope.walikota.pageName = 'cilegon';

            $scope.walikota.name = 'Kantor Walikota Cilegon';
            $scope.walikota.alamat = 'Jl. Jend. Sudirman No. 2 Cilegon - Banten';
            $scope.walikota.kodePos = '42431';
            $scope.walikota.telp = '(0254) 380577';
            $scope.walikota.email = 'kominfo@cilegon.go.id';

            $scope.walikota.reviewLink = 'link untuk kantor walikota cilegon';

            $scope.walikota.map.center.latitude = '-5.998853';
            $scope.walikota.map.center.longitude = '106.032737';

            $scope.isWalikotaInfoPage = true;
            $scope.isWalikotaReviewPage = false;

        } else if ($location.path() === '/walikota/cilegon/review') {
            $scope.walikota.title = 'Cilegon';
            $scope.walikota.pageName = 'cilegon';

            $scope.walikota.name = 'Kantor Walikota Cilegon';
            $scope.walikota.alamat = 'Jl. Jend. Sudirman No. 2 Cilegon - Banten';
            $scope.walikota.kodePos = '42431';
            $scope.walikota.telp = '(0254) 380577';
            $scope.walikota.email = 'kominfo@cilegon.go.id';

            $scope.walikota.reviewLink = 'link untuk kantor walikota cilegon';

            $scope.walikota.map.center.latitude = '-5.998853';
            $scope.walikota.map.center.longitude = '106.032737';

            $scope.isWalikotaInfoPage = false;
            $scope.isWalikotaReviewPage = true;

        }else {
            $scope.walikota.title = 'Walikota Unknown...';
            $scope.walikota.pageName = $location.url();

            $scope.walikota.name = 'PTSP Unknown';
            $scope.walikota.alamat = 'alamat ptsp Unknown';
            $scope.walikota.jamBuka = 'jam buka ptsp Unknown';
            $scope.walikota.informasi = 'review for ' + $location.path();
            $scope.walikota.reviewLink = 'link untuk Unknown';
            $scope.walikota.googleMaps.lat = '123 xyz';
            $scope.walikota.googleMaps.lan = '123 xyz';
        }

        if($location.path().indexOf('trend') !== 0){
            var stringArray = $location.path().split('/');
            $scope.walikota.pageName = stringArray[2];
        }

        civilServiceService.findById(2).then(function(data){
            $scope.civilService = data;
            if($location.path() === '/walikota/'+$scope.walikota.pageName+'/informasi' ||
                $location.path() === '/walikota/'+$scope.walikota.pageName
            ){
                $scope.templateUrl = 'templates/walikota.info.tpl.html';
            }else if ($location.path() === '/walikota/'+$scope.walikota.pageName+'/review'){
                $scope.templateUrl = 'templates/include.review.tpl.html';
            }else if ($location.path() === '/walikota/'+$scope.walikota.pageName+'/trend'){
                $scope.templateUrl = 'templates/include.trend.tpl.html';
            }
        });

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    }]);