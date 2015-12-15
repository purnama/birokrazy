/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.controller('IzinUsahaController', ['$scope', '$location', '$rootScope', '$constant', 'LocationService',
    'HighchartService', 'DurationModalService', 'CivilServiceService',
    function ($scope, $location, $rootScope, $constant, locationService, highchartService, durationModalService, civilServiceService) {

        $scope.isShowWaralaba = false;
        $scope.isShowProses = false;
        civilServiceService.findById(4).then(function(data){
            $scope.civilService = data;
            if ($location.path() === '/izin-usaha/review') {
                $scope.templateUrl = 'templates/include.review.tpl.html';
            } else if ($location.path() === '/izin-usaha/trend') {
                $scope.templateUrl = 'templates/include.trend.tpl.html';
            } else if ($location.path() === '/izin-usaha/proses') {
                $scope.templateUrl = 'templates/izin-usaha.proses.tpl.html';
            } else if ($location.path() === '/izin-usaha') {
                $scope.templateUrl = 'templates/izin-usaha.info.tpl.html';
            }
        });
        $scope.waitingTime = highchartService.waitingTime;
        $scope.duration = {
            modal: false,
            checked: false,
            units: $constant.duration.units,
            value: 3,
            unit: $constant.duration.minggu
        };
        $scope.modalOpen = function () {
            durationModalService.open($scope);
        };

        $scope.listOfJenisUsaha = [
            {id: 0, name: '-- pilih --'},
            {id: 1, name: 'Ritel / Toko Tradisional'},
            {id: 2, name: 'Ritel / Toko Modern'}
        ];

        $scope.listOfWaralaba = [
            {id: 0, name: '-- pilih --'},
            {id: 1, name: 'Ya'},
            {id: 2, name: 'Tidak'}
        ];

        $scope.location = locationService;

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.jenisUsahaChange = function(jenisUsaha){
            if(jenisUsaha.id === 1){
                $scope.isShowProses = true;
            }else{
                $scope.isShowProses = false;
            }
            if(jenisUsaha.id === 2){
                $scope.isShowWaralaba = true;
            }else {
                $scope.isShowWaralaba = false;
            }
        };

        $scope.waralabaChange = function(waralaba){
            if(waralaba.id !== 0){
                $scope.isShowProses = true;
            }else {
                $scope.isShowProses = false;
            }
        };

        $scope.counter = 0;
        $scope.maxbar = 5;
        $scope.currentBar = 0;
        $scope.currentWidth = '';

        $scope.Math = window.Math;

        $scope.isActiveStep2 = true;
        $scope.isActiveStep3 = true;
        $scope.isActiveStep4 = true;
        $scope.isActiveStep5 = true;

        $scope.processCheckBox = function (confirmed) {
            if (confirmed) {
                $scope.counter++;
            } else {
                $scope.counter--;
            }

            $scope.currentBar = Math.floor(($scope.counter / $scope.maxbar ) * 100);
            $scope.currentWidth = 'width: ' + $scope.currentBar + '%';

            if ($scope.counter === 1) {
                $scope.isActiveStep2 = false;

            } else if ($scope.counter === 2) {
                $scope.isActiveStep3 = false;

            } else if ($scope.counter === 3) {
                $scope.isActiveStep4 = false;

            } else if ($scope.counter === 4) {
                $scope.isActiveStep5 = false;

            } else if ($scope.counter === 5) {
                $scope.isActiveStep6 = false;

            }
        };

        $scope.testingF = function(modelTest) {
            console.log(modelTest);
        };

    }]);