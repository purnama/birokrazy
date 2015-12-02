hackMdk3App.controller('PasporController', ['$scope', '$location', '$constant', 'HighchartService', 'DurationModalService',
    function ($scope, $location, $constant, highchartService, durationModalService) {

        $scope.waitingTime = highchartService.waitingTime;

        $scope.duration = {
            modal: false,
            checked: false,
            units: $constant.duration.units,
            value: 4,
            unit: $constant.duration.hari
        };
        $scope.modalOpen = function () {
            durationModalService.open($scope);
        }

        if ($location.path() === '/paspor') {
            $scope.templateUrl = 'templates/paspor.info.tpl.html';
        } else if ($location.path() === '/paspor/proses') {
            $scope.templateUrl = 'templates/paspor.proses.tpl.html';
        } else if ($location.path() === '/paspor/review') {
            $scope.templateUrl = 'templates/include.review.tpl.html';
        } else if ($location.path() === '/paspor/trend') {
            $scope.templateUrl = 'templates/include.trend.tpl.html';
        }

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
        }

        $scope.pasporPeruntukanPaspor = function (peruntukanPaspor) {
            if (peruntukanPaspor.id !== 0) {
                $scope.isShowProses = true;
            } else {
                $scope.isShowProses = false;
            }
        }

        $scope.pasporProsesPaspor = function (prosesPaspor) {
            if (prosesPaspor.id !== 0) {
                $scope.isShowSyaratDanProses = true;
            } else {
                $scope.isShowSyaratDanProses = false;
            }
        }

    }]);