/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
oldModule.controller('oldModule.PasporController', ['$scope', '$location', '$constant', 'HighchartService', 'DurationModalService',
    'CivilServiceService',
    function ($scope, $location, $constant, highchartService, durationModalService, civilServiceService) {

        $scope.waitingTime = highchartService.waitingTime;
        civilServiceService.findById(2).then(function(data){
            $scope.civilService = data;
            if ($location.path() === '/paspor') {
                $scope.templateUrl = 'templates/paspor.info.tpl.html';
            } else if ($location.path() === '/paspor/proses') {
                $scope.templateUrl = 'templates/paspor.proses.tpl.html';
            } else if ($location.path() === '/paspor/review') {
                $scope.templateUrl = 'templates/include.review.tpl.html';
            } else if ($location.path() === '/paspor/trend') {
                $scope.templateUrl = 'templates/include.trend.tpl.html';
            }
        });
        $scope.duration = {
            modal: false,
            checked: false,
            units: $constant.duration.units,
            value: 4,
            unit: $constant.duration.hari
        };
        $scope.modalOpen = function () {
            durationModalService.open($scope);
        };

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.listOfOptionsDomisili = [
            {id: 0, name: '--pilih--'},
            {id: 1, name: 'Indonesia'},
            {id: 2, name: 'Luar negeri'}
        ];

        $scope.listOfOptionsPeruntukan = [
            {id: 0, name: '--pilih--'},
            {id: 1, name: 'Dewasa'},
            {id: 2, name: 'Anak-anak'}
        ];

        $scope.listOfOptionsProses = [
            {id: 0, name: '--pilih--'},
            {id: 1, name: 'Manual'},
            {id: 2, name: 'Elektronik'}
        ];

        $scope.isShowPeruntukan = false;
        $scope.isShowProses = false;
        $scope.isShowSyaratDanProses = false;

        $scope.pasporDomisiliPaspor = function (domisiliPaspor) {
            if (domisiliPaspor.id !== 0) {
                $scope.isShowPeruntukan = true;
            } else {
                $scope.isShowPeruntukan = false;
            }
        };

        $scope.pasporPeruntukanPaspor = function (peruntukanPaspor) {
            if (peruntukanPaspor.id !== 0) {
                $scope.isShowProses = true;
            } else {
                $scope.isShowProses = false;
            }
        };

        $scope.pasporProsesPaspor = function (prosesPaspor) {
            if (prosesPaspor.id !== 0) {
                $scope.isShowSyaratDanProses = true;
            } else {
                $scope.isShowSyaratDanProses = false;
            }
        };

        $scope.counter = 0;
        $scope.maxbar = 8;
        $scope.currentBar = 0;
        $scope.currentWidth = '';

        $scope.Math = window.Math;

        $scope.isActiveStep2 = true;
        $scope.isActiveStep3 = true;
        $scope.isActiveStep4 = true;
        $scope.isActiveStep5 = true;
        $scope.isActiveStep6 = true;
        $scope.isActiveStep7 = true;
        $scope.isActiveStep8 = true;

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

            } else if ($scope.counter === 6) {
                $scope.isActiveStep7 = false;

            } else if ($scope.counter === 7) {
                $scope.isActiveStep8 = false;

            } else if ($scope.counter === 8) {
                $scope.isActiveStep9 = false;
            }
        };

    }]);