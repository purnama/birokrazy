
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

        $scope.yesNoQuestionListOfOption = [
            {id: 0, name: '--pilih--'},
            {id: 1, name: 'Ya'},
            {id: 2, name: 'Tidak'}
        ];

        $scope.suratKepemilikanTanahListOfOption = [
            {id: 0, name: '--pilih--'},
            {id: 1, name: 'Berupa sertifikat tanah dari BPN yang dilegalisir Notaris'},
            {id: 2, name: 'Berupa Kartu Kapling dari Pemerintah Daerah/ Pusat (yang dilegalisir Pemerintah Kotamadya/ Instansi Pusat penerbit Kartu Kapling)'}
        ];

        $scope.peruntukanIMListOfOption = [
            {id: 0, name: '--pilih--'},
            {id: 1, name: 'Rumah Tinggal (Real Estate)'},
            {id: 2, name: 'Rumah Tinggal (Pemugaran gol A dan B)'},
            {id: 3, name: 'Bangunan Umum (Kurang dari 8 Lantai)'},
            {id: 4, name: 'Bangunan Umum (8 Lantai dan lebih)'}
        ];

        $scope.isShowSyarat = false;

        $scope.isShowAtasNamaPerusahaan = false;
        $scope.isShowSuratKepemilikanTanah = false;
        $scope.isShowOlehRTLP = false;
        $scope.isShowLuasTanah = false;
        $scope.isShowZonaKhusus = false;
        $scope.isShowGolonganLokasi = false;
        $scope.isShowBentangBangunan = false;

        $scope.isShowImbPersyaratan = false;
        $scope.isShowImbProcess = false;

        $scope.totalAnswered = 0;

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
        }

        $scope.testFunction = function(data){
            $scope.testValue = data;
            console.log($scope.testValue);
        }

        $scope.showPersyaratan = function(data){
            if(data === '1'){

            }
        }

        $scope.selectedItemChanged = function(data){
            console.log(data);
        }

        $scope.imbPeruntukanIMB = function(peruntukanIMB){
            if(peruntukanIMB.id !== 0){
                $scope.isShowAtasNamaPerusahaan = true;
            }else {
                $scope.isShowAtasNamaPerusahaan = false;
            }
        }

        $scope.imbAtasNamaPerusahaan = function(atasNamaPerusahaan){
            if(atasNamaPerusahaan.id !== 0){
                $scope.isShowSuratKepemilikanTanah = true;
            }else {
                $scope.isShowSuratKepemilikanTanah = false;
            }
        }

        $scope.imbSuratKepemilikanTanah = function(suratKepemilikanTanah){
            if(suratKepemilikanTanah.id !== 0){
                $scope.isShowOlehRTLP = true;
            }else {
                $scope.isShowOlehRTLP = false;
            }
        }

        $scope.imbOlehRTLP = function(olehRTLP){
            if(olehRTLP.id !== 0){
                $scope.isShowLuasTanah = true;
            }else {
                $scope.isShowLuasTanah = false;
            }
        }

        $scope.imbLuasTanah = function(luasTanah){
            if(luasTanah.id !== 0){
                $scope.isShowZonaKhusus = true;
            }else {
                $scope.isShowZonaKhusus = false;
            }
        }

        $scope.imbZonaKhusus = function(zonaKhusus){
            if(zonaKhusus.id !== 0){
                $scope.isShowGolonganLokasi = true;
            }else {
                $scope.isShowGolonganLokasi = false;
            }
        }

        $scope.imbGolonganLokasi = function(golonganLokasi){
            if(golonganLokasi.id !== 0){
                $scope.isShowBentangBangunan = true;
            }else {
                $scope.isShowBentangBangunan = false;
            }
        }

        $scope.imbBentangBangunan = function(bentangBangunan){
            if(bentangBangunan.id !== 0){
                $scope.isShowImbPersyaratan = true;
                $scope.isShowImbProcess = true;
            }else {
                $scope.isShowImbPersyaratan = false;
                $scope.isShowImbProcess = false;
            }
        }

    }]);