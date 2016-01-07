/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
oldModule.controller('oldModule.ImbController', ['$scope', '$location', '$constant', 'HighchartService', 'DurationModalService',
    'CivilServiceService',
    function ($scope, $location, $constant, highchartService, durationModalService, civilServiceService) {

        $scope.waitingTime = highchartService.waitingTime;
        civilServiceService.findById(3).then(function(data){
            $scope.civilService = data;
            if ($location.path() === '/imb') {
                $scope.templateUrl = 'templates/imb.info.tpl.html';
            } else if ($location.path() === '/imb/proses') {
                $scope.templateUrl = 'templates/imb.proses.tpl.html';
            } else if ($location.path() === '/imb/review') {
                $scope.templateUrl = 'templates/include.review.tpl.html';
            } else if ($location.path() === '/imb/trend') {
                $scope.templateUrl = 'templates/include.trend.tpl.html';
            }
        });
        $scope.duration = {
            modal: false,
            checked: false,
            units: $constant.duration.units,
            value: 1,
            unit: $constant.duration.minggu
        };

        $scope.modalOpen = function () {
            durationModalService.open($scope);
        };

        $scope.daftarProvinsi = [
            {id: 1, name: '-- Pilih Propinsi --'},
            {id: 2, name: 'DKI Jakarta'},
            {id: 3, name: 'Jawa Tengah'},
            {id: 4, name: 'Jawa Timur'}
        ];

        $scope.daftarKabupatenKota = [
            {id: 1, name: '-- Pilih Kabupaten/Kota --'},
            {id: 2, name: 'Jakarta Barat'},
            {id: 3, name: 'Jakarta Timur'},
            {id: 4, name: 'Jakarta Utara'},
            {id: 5, name: 'Jakarta Selatan'},
            {id: 6, name: 'Jakarta Pusat'}
        ];

        $scope.daftarKecamatan = [
            {id: 1, name: '-- Pilih Kecamatan --'},
            {id: 2, name: 'Cengkareng'},
            {id: 3, name: 'Grogol Petamburan'},
            {id: 4, name: 'Kalideres'},
            {id: 5, name: 'Kebon Jeruk'},
            {id: 6, name: 'Kembangan'}
        ];

        $scope.daftarKelurahan = [
            {id: 1, name: '-- Pilih Kelurahan --'},
            {id: 2, name: 'Kedaung'},
            {id: 3, name: 'Kapuk'},
            {id: 4, name: 'Cengkareng Barat'},
            {id: 5, name: 'Cengkareng Timur'},
            {id: 6, name: 'Rawa Buaya'},
            {id: 7, name: 'Duri Kosambi'}
        ];

        $scope.yesNoQuestionListOfOption = [
            {id: 0, name: '--pilih--'},
            {id: 1, name: 'Ya'},
            {id: 2, name: 'Tidak'}
        ];

        $scope.suratKepemilikanTanahListOfOption = [
            {id: 0, name: '--pilih--'},
            {id: 1, name: 'Berupa sertifikat tanah dari BPN yang dilegalisir Notaris'},
            {
                id: 2,
                name: 'Berupa Kartu Kapling dari Pemerintah Daerah/ Pusat (yang dilegalisir Pemerintah Kotamadya/ Instansi Pusat penerbit Kartu Kapling)'
            }
        ];

        $scope.peruntukanIMBListOfOption = [
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

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.testFunction = function (data) {
            $scope.testValue = data;
            console.log($scope.testValue);
        };

        $scope.showPersyaratan = function (data) {
            if (data === '1') {

            }
        };

        $scope.selectedItemChanged = function (data) {
            console.log(data);
        };

        $scope.imbPeruntukanIMB = function (peruntukanIMB) {
            if (peruntukanIMB.id !== 0) {
                $scope.totalAnswered = 1;
            } else {
                $scope.totalAnswered = 0;
            }

            $scope.updateQuestionsView($scope.totalAnswered);
        };

        $scope.imbAtasNamaPerusahaan = function (atasNamaPerusahaan) {
            if (atasNamaPerusahaan.id !== 0) {
                $scope.totalAnswered = 2;
            } else {
                $scope.totalAnswered = 1;
            }

            $scope.updateQuestionsView($scope.totalAnswered);
        };

        $scope.imbSuratKepemilikanTanah = function (suratKepemilikanTanah) {
            if (suratKepemilikanTanah.id !== 0) {
                $scope.totalAnswered = 3;
            } else {
                $scope.totalAnswered = 2;
            }

            $scope.updateQuestionsView($scope.totalAnswered);
        };

        $scope.imbOlehRTLP = function (olehRTLP) {
            if (olehRTLP.id !== 0) {
                $scope.totalAnswered = 4;
            } else {
                $scope.totalAnswered = 3;
            }

            $scope.updateQuestionsView($scope.totalAnswered);
        };

        $scope.imbLuasTanah = function (luasTanah) {
            if (luasTanah.id !== 0) {
                $scope.totalAnswered = 5;
            } else {
                $scope.totalAnswered = 4;
            }

            $scope.updateQuestionsView($scope.totalAnswered);
        };

        $scope.imbZonaKhusus = function (zonaKhusus) {
            if (zonaKhusus.id !== 0) {
                $scope.totalAnswered = 6;
            } else {
                $scope.totalAnswered = 5;
            }

            $scope.updateQuestionsView($scope.totalAnswered);
        };

        $scope.imbGolonganLokasi = function (golonganLokasi) {
            if (golonganLokasi.id !== 0) {
                $scope.totalAnswered = 7;
            } else {
                $scope.totalAnswered = 6;
            }

            $scope.updateQuestionsView($scope.totalAnswered);
        };

        $scope.imbBentangBangunan = function (bentangBangunan) {
            if (bentangBangunan.id !== 0) {
                $scope.totalAnswered = 8;
            } else {
                $scope.totalAnswered = 7;
            }

            $scope.updateQuestionsView($scope.totalAnswered);
        };

        $scope.updateQuestionsView = function (totalAnsweredQuestion) {

            $scope.isShowAtasNamaPerusahaan = false;
            $scope.isShowSuratKepemilikanTanah = false;
            $scope.isShowOlehRTLP = false;
            $scope.isShowLuasTanah = false;
            $scope.isShowZonaKhusus = false;
            $scope.isShowGolonganLokasi = false;
            $scope.isShowBentangBangunan = false;

            $scope.isShowImbPersyaratan = false;
            $scope.isShowImbProcess = false;

            if (totalAnsweredQuestion > 7) {
                $scope.isShowAtasNamaPerusahaan = true;
                $scope.isShowSuratKepemilikanTanah = true;
                $scope.isShowOlehRTLP = true;
                $scope.isShowLuasTanah = true;
                $scope.isShowZonaKhusus = true;
                $scope.isShowGolonganLokasi = true;
                $scope.isShowBentangBangunan = true;

                $scope.isShowImbPersyaratan = true;
                $scope.isShowImbProcess = true;
            }
            else if (totalAnsweredQuestion > 6) {
                $scope.isShowAtasNamaPerusahaan = true;
                $scope.isShowSuratKepemilikanTanah = true;
                $scope.isShowOlehRTLP = true;
                $scope.isShowLuasTanah = true;
                $scope.isShowZonaKhusus = true;
                $scope.isShowGolonganLokasi = true;
                $scope.isShowBentangBangunan = true;
            }
            else if (totalAnsweredQuestion > 5) {
                $scope.isShowAtasNamaPerusahaan = true;
                $scope.isShowSuratKepemilikanTanah = true;
                $scope.isShowOlehRTLP = true;
                $scope.isShowLuasTanah = true;
                $scope.isShowZonaKhusus = true;
                $scope.isShowGolonganLokasi = true;

            }
            else if (totalAnsweredQuestion > 4) {
                $scope.isShowAtasNamaPerusahaan = true;
                $scope.isShowSuratKepemilikanTanah = true;
                $scope.isShowOlehRTLP = true;
                $scope.isShowLuasTanah = true;
                $scope.isShowZonaKhusus = true;

            }
            else if (totalAnsweredQuestion > 3) {
                $scope.isShowAtasNamaPerusahaan = true;
                $scope.isShowSuratKepemilikanTanah = true;
                $scope.isShowOlehRTLP = true;
                $scope.isShowLuasTanah = true;

            }
            else if (totalAnsweredQuestion > 2) {
                $scope.isShowAtasNamaPerusahaan = true;
                $scope.isShowSuratKepemilikanTanah = true;
                $scope.isShowOlehRTLP = true;

            }
            else if (totalAnsweredQuestion > 1) {
                $scope.isShowAtasNamaPerusahaan = true;
                $scope.isShowSuratKepemilikanTanah = true;

            }
            else if (totalAnsweredQuestion > 0) {
                $scope.isShowAtasNamaPerusahaan = true;

            }
        };

        $scope.counter = 0;
        $scope.maxbar = 6;
        $scope.currentBar = 0;
        $scope.currentWidth = '';

        $scope.Math = window.Math;

        $scope.isActiveStep2 = true;
        $scope.isActiveStep3 = true;
        $scope.isActiveStep4 = true;
        $scope.isActiveStep5 = true;
        $scope.isActiveStep6 = true;

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
            }
        };


    }]);