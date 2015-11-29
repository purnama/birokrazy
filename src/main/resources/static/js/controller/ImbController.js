
hackMdk3App.controller('ImbController', ['$scope', '$location',
    function ($scope, $location) {

        $scope.daftarProvinsi = [
            {id: 1, name : '-- Pilih Propinsi --'},
            {id: 2, name : 'DKI Jakarta'},
            {id: 3, name : 'Jawa Tengah'},
            {id: 4, name : 'Jawa Timur'}
        ];

        $scope.daftarKabupatenKota = [
            {id: 1, name : '-- Pilih Kabupaten/Kota --'},
            {id: 2, name : 'Jakarta Barat'},
            {id: 3, name : 'Jakarta Timur'},
            {id: 4, name : 'Jakarta Utara'},
            {id: 5, name : 'Jakarta Selatan'},
            {id: 6, name : 'Jakarta Pusat'}
        ];

        $scope.daftarKecamatan = [
            {id: 1, name : '-- Pilih Kecamatan --'},
            {id: 2, name : 'Cengkareng'},
            {id: 3, name : 'Grogol Petamburan'},
            {id: 4, name : 'Kalideres'},
            {id: 5, name : 'Kebon Jeruk'},
            {id: 6, name : 'Kembangan'}
        ];

        $scope.daftarKelurahan = [
            {id: 1, name : '-- Pilih Kelurahan --'},
            {id: 2, name : 'Kedaung'},
            {id: 3, name : 'Kapuk'},
            {id: 4, name : 'Cengkareng Barat'},
            {id: 5, name : 'Cengkareng Timur'},
            {id: 6, name : 'Rawa Buaya'},
            {id: 7, name : 'Duri Kosambi'}
        ];

        if ($location.path() === '/imb') {
            $scope.templateUrl = 'templates/imb.info.tpl.html';
        }
        else if($location.path() === '/imb/proses') {
            $scope.templateUrl = 'templates/imb.proses.tpl.html';
        }
        else if($location.path() === '/imb/review') {
            $scope.templateUrl = 'templates/include.review.tpl.html';
        }
        else if($location.path() === '/imb/listDokumen') {
            $scope.templateUrl = 'templates/user.dokument.list.tpl.html';
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