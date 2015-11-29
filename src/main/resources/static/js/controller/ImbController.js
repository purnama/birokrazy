
hackMdk3App.controller('ImbController', ['$scope', '$location',
    function ($scope, $location) {

        $scope.daftarProvinsi = [
            {id: 1, name : '-- Pilih Propinsi --'},
            {id: 2, name : 'DKI Jakarta'},
            {id: 3, name : 'Jawa Tengah'},
            {id: 4, name : 'Jawa Timur'}
        ];

        $scope.daftarKabupatenKota = [];
        $scope.daftarKecamatan = [];
        $scope.daftarKelurahan = [];


        if ($location.path() === '/imb') {
            $scope.templateUrl = 'templates/imb.info.tpl.html';
        }
        else if ($location.path() === '/imb/deskripsi') {
            $scope.templateUrl = 'templates/imb.deskripsi.tpl.html';
        }
        else if ($location.path() === '/imb/lokasi') {
            $scope.templateUrl = 'templates/imb.lokasi.tpl.html';
        }
        else if ($location.path() === '/imb/statistik') {
            $scope.templateUrl = 'templates/imb.statistik.tpl.html';
        }
        else if ($location.path() === '/imb/persyaratan') {
            $scope.templateUrl = 'templates/imb.persyaratan.tpl.html';
        }
        else if($location.path() === '/imb/proses') {
            $scope.templateUrl = 'templates/imb.proses.tpl.html';
        }
        else if($location.path() === '/imb/lapor') {
            $scope.templateUrl = 'templates/addReview.tpl.html';
        }
        else if($location.path() === '/imb/testing') {
            $scope.templateUrl = 'templates/userOpenProcess.tpl.html';
        }
        else {
            $scope.templateUrl = 'templates/imb.info.tpl.html';
        }

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.testFunction = function(data){
            $scope.testValue = data;
            console.log($scope.testValue);
        };


    }]);