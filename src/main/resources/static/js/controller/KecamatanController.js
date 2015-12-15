/**
 * Created by hackathon on 04.12.15.
 */

birokrazyApp.controller('KecamatanController', ['$scope', '$location', 'CivilServiceService', 'HighchartService',
    function ($scope, $location, civilServiceService, highchartService) {

        $scope.waitingTime = highchartService.waitingTime;

        //view-model, this will be filled from database later...
        $scope.kecamatan = {
            id: '',
            name : '',
            alamat : '',
            jamBuka : 'Senin - Jumat 09:00 - 17:00',
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

        $scope.isKecamatanFindPage = false;
        $scope.isKecamatanInfoPage = false;
        $scope.isKecamatanReviewPage = false;

        if ($location.path() === '/kecamatan') {
            $scope.isKecamatanRootPage = true;

        }else if (($location.path() === '/kecamatan/cicendo') || ($location.path() === '/kecamatan/cicendo/informasi')) {
            $scope.kecamatan.title = 'Cicendo - Bandung';
            $scope.kecamatan.pageName = 'cicendo';

            $scope.kecamatan.name = 'Kantor Kecamatan Cicendo - Bandung';
            $scope.kecamatan.alamat = 'JL. Purabaya No.1 Bandung';
            $scope.kecamatan.kodePos = '40172';
            $scope.kecamatan.telp = '022 - 6015411';
            $scope.kecamatan.email = 'kec.ccd@bandung.go.id';

            $scope.kecamatan.informasi = 'Kecamatan Cicendo , merupakan salah satu kecamatan dari 26 Kecamatan yang ada di Kota Bandung. Sebagai pintu gerbang sebelah barat kota Bandung, secara geografis Kecamatan Cicendo terletak di sebelah Barat Kota Bandung dengan Luas Wilayah 688,84 ha. Dengan kepadatan penduduk rata-rata 138 jiwa per ha. Wilayah kecamatan terbagi dalam 6 kelurahan, 18 lingkungan , 56 Rukun Warga dan 413 Rukun Tetangga';

            $scope.kecamatan.reviewLink = 'link untuk kantor kecamatan Cicendo - Bandung';

            $scope.kecamatan.map.center.latitude = '-6.9069519';
            $scope.kecamatan.map.center.longitude = '107.595031';

            $scope.isKecamatanInfoPage = true;
            $scope.isKecamatanReviewPage = false;

        } else if ($location.path() === '/kecamatan/dago/review') {
            $scope.kecamatan.title = 'Cicendo - Bandung';
            $scope.kecamatan.pageName = 'cicendo';

            $scope.kecamatan.name = 'Kantor Kecamatan Cicendo - Bandung';
            $scope.kecamatan.alamat = 'JL. Purabaya No.1 Bandung';
            $scope.kecamatan.kodePos = '40172';
            $scope.kecamatan.telp = '022 - 6015411';
            $scope.kecamatan.email = 'kec.ccd@bandung.go.id';

            $scope.kecamatan.informasi = 'Kecamatan Cicendo , merupakan salah satu kecamatan dari 26 Kecamatan yang ada di Kota Bandung. Sebagai pintu gerbang sebelah barat kota Bandung, secara geografis Kecamatan Cicendo terletak di sebelah Barat Kota Bandung dengan Luas Wilayah 688,84 ha. Dengan kepadatan penduduk rata-rata 138 jiwa per ha. Wilayah kecamatan terbagi dalam 6 kelurahan, 18 lingkungan , 56 Rukun Warga dan 413 Rukun Tetangga';

            $scope.kecamatan.reviewLink = 'link untuk kantor kecamatan Cicendo - Bandung';

            $scope.kecamatan.map.center.latitude = '-6.9069519';
            $scope.kecamatan.map.center.longitude = '107.595031';

            $scope.isKecamatanInfoPage = false;
            $scope.isKecamatanReviewPage = true;

        } else if (($location.path() === '/kecamatan/buahBatu') || ($location.path() === '/kecamatan/buahBatu/informasi')) {
            $scope.kecamatan.title = 'Buah Batu - Bandung';
            $scope.kecamatan.pageName = 'buahBatu';

            $scope.kecamatan.name = 'Kantor Kecamatan Buah Batu - Bandung';
            $scope.kecamatan.alamat = 'JL. Cijawura Hilir No. 64 Bandung';
            $scope.kecamatan.kodePos = '40287';
            $scope.kecamatan.telp = '022 - 7509945';
            $scope.kecamatan.email = 'kec.bubat@bandung.go.id';

            $scope.kecamatan.informasi = 'Kecamatan Cicendo , merupakan salah satu kecamatan dari 26 Kecamatan yang ada di Kota Bandung. Sebagai pintu gerbang sebelah barat kota Bandung, secara geografis Kecamatan Cicendo terletak di sebelah Barat Kota Bandung dengan Luas Wilayah 688,84 ha. Dengan kepadatan penduduk rata-rata 138 jiwa per ha. Wilayah kecamatan terbagi dalam 6 kelurahan, 18 lingkungan , 56 Rukun Warga dan 413 Rukun Tetangga';

            $scope.kecamatan.reviewLink = 'link untuk kantor kecamatan Buah Batu - Bandung';

            $scope.kecamatan.map.center.latitude = '-6.95694';
            $scope.kecamatan.map.center.longitude = '107.6542824';

            $scope.isKecamatanInfoPage = true;
            $scope.isKecamatanReviewPage = false;

        } else if ($location.path() === '/kecamatan/buahBatu/review') {
            $scope.kecamatan.title = 'Buah Batu - Bandung';
            $scope.kecamatan.pageName = 'buahBatu';

            $scope.kecamatan.name = 'Kantor Kecamatan Buah Batu - Bandung';
            $scope.kecamatan.alamat = 'JL. Cijawura Hilir No. 64 Bandung';
            $scope.kecamatan.kodePos = '40287';
            $scope.kecamatan.telp = '022 - 7509945';
            $scope.kecamatan.email = 'kec.bubat@bandung.go.id';

            $scope.kecamatan.informasi = 'Kecamatan Cicendo , merupakan salah satu kecamatan dari 26 Kecamatan yang ada di Kota Bandung. Sebagai pintu gerbang sebelah barat kota Bandung, secara geografis Kecamatan Cicendo terletak di sebelah Barat Kota Bandung dengan Luas Wilayah 688,84 ha. Dengan kepadatan penduduk rata-rata 138 jiwa per ha. Wilayah kecamatan terbagi dalam 6 kelurahan, 18 lingkungan , 56 Rukun Warga dan 413 Rukun Tetangga';

            $scope.kecamatan.reviewLink = 'link untuk kantor kecamatan Buah Batu - Bandung';

            $scope.kecamatan.map.center.latitude = '-6.95694';
            $scope.kecamatan.map.center.longitude = '107.6542824';

            $scope.isKecamatanInfoPage = false;
            $scope.isKecamatanReviewPage = true;

        }else {
            $scope.kecamatan.title = 'PTSP Unknown...';
            $scope.kecamatan.pageName = $location.url();

            $scope.kecamatan.name = 'PTSP Unknown';
            $scope.kecamatan.alamat = 'alamat ptsp Unknown';
            $scope.kecamatan.jamBuka = 'jam buka ptsp Unknown';
            //$scope.kecamatan.informasi = 'review for ' + $location.path();
            $scope.kecamatan.reviewLink = 'link untuk Unknown';
            $scope.kecamatan.googleMaps.lat = '123 xyz';
            $scope.kecamatan.googleMaps.lan = '123 xyz';
        }

        if($location.path().indexOf('trend') !== 0){
            var stringArray = $location.path().split('/');
            $scope.kecamatan.pageName = stringArray[2];
        }

        civilServiceService.findById(3).then(function(data){
            $scope.civilService = data;
            if($location.path() === '/kecamatan/'+$scope.kecamatan.pageName+'/informasi' ||
                $location.path() === '/kecamatan/'+$scope.kecamatan.pageName
            ){
                $scope.templateUrl = 'templates/kecamatan.info.tpl.html';
            }else if ($location.path() === '/kecamatan/'+$scope.kecamatan.pageName+'/review'){
                $scope.templateUrl = 'templates/include.review.tpl.html';
            }else if ($location.path() === '/kecamatan/'+$scope.kecamatan.pageName+'/trend'){
                $scope.templateUrl = 'templates/include.trend.tpl.html';
            }
        });

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    }]);