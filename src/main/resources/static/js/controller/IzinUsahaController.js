/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('IzinUsahaController', ['$scope', '$location', '$rootScope', 'LocationService',
    function ($scope, $location, $rootScope, locationService) {

        $scope.isShowWaralaba = false;
        $scope.isShowProses = false;

        $scope.listOfJenisUsaha = [
            {id: 0, name: '-- pilih --'},
            {id: 1, name: 'Ritel / Toko Tradisional'},
            {id: 2, name: 'Ritel / Toko Modern'}
        ];

        $scope.listOfWaralaba = [
            {id: 0, name: '-- pilih --'},
            {id: 1, name: 'Ya'},
            {id: 2, name: 'Tidak'}
        ]

        if ($location.path() === '/izin-usaha/review') {
            $scope.templateUrl = 'templates/include.review.tpl.html';
        } else if ($location.path() === '/izin-usaha/proses') {
            $scope.templateUrl = 'templates/izin-usaha.proses.tpl.html';
        } else if ($location.path() === '/izin-usaha') {
            $scope.templateUrl = 'templates/izin-usaha.info.tpl.html';
        }
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

    }]);