/**
 * Created by hackathon on 04.12.15.
 */

hackMdk3App.controller('LokasiWalikotaController', ['$scope', '$location', 'uiGmapGoogleMapApi',
    function ($scope, $location, uiGmapGoogleMapApi) {

        $scope.map = {center: {latitude: 45, longitude: -73}, zoom: 8};
        uiGmapGoogleMapApi.then(function (maps) {

        });

        $scope.daftarProvinsi = [
            {id: 0, name: '-- Pilih Provinsi --'},
            {id: 1, name: 'DKI Jakarta'},
            {id: 2, name: 'Jawa Tengah'},
            {id: 3, name: 'Jawa Timur'}
        ];

        $scope.daftarKabupatenKota = [
            {id: 0, name: '-- Pilih Kabupaten/Kota --'},
            {id: 1, name: 'Jakarta Barat'},
            {id: 2, name: 'Jakarta Timur'},
            {id: 3, name: 'Jakarta Utara'},
            {id: 4, name: 'Jakarta Selatan'},
            {id: 5, name: 'Jakarta Pusat'}
        ];

        $scope.daftarWalikota = [
            {id: 0, nama: '-', alamat: '-', kodePos: '-', telp: '-', email: '-', jamBuka: '-'},
            {
                id: 1,
                nama: 'Walikota Kedaung',
                alamat: 'Jl. Komplek Departemen Agama, Kedaung Kali Angke',
                kodePos: 'Jakarta Barat, 10011',
                telp: 'Telp. 021-112233',
                email: 'Email: walikota-kedaung@jakarta-barat.id',
                jamBuka: 'Senin - Jumat 09:00 - 17:00',
                map: {
                    zoom: 18,
                    center: {
                        latitude: '-6.153593',
                        longitude: '106.762150'
                    }
                },
                link: 'walikota/kedaung'
            },
            {
                id: 2,
                nama: 'Walikota Kapuk',
                alamat: 'JL. Kapuk Raya, No.1 RT. 002/03',
                kodePos: 'Jakarta Barat, 10022',
                telp: 'Telp. 021-554433',
                email: 'Email: walikota-kapuk@jakarta-utara.id',
                jamBuka: 'Senin - Jumat 09:00 - 17:00',
                map: {
                    zoom: 18,
                    center: {
                        latitude: '-6.131836',
                        longitude: '106.747880'
                    }
                },
                link: 'walikota/kapuk'
            },
            {
                id: 3,
                nama: 'Walikota Cengkareng Barat',
                alamat: 'Jl. Utama Raya No.42, Cengkareng',
                kodePos: 'Jakarta Barat, 11730',
                telp: 'Telp. 021-121212',
                email: 'Email: walikota-cengkareng-barat@jakarta-barat.id',
                jamBuka: 'Senin - Jumat 09:00 - 17:00',
                map: {
                    zoom: 18,
                    center: {
                        latitude: '-6.149574',
                        longitude: '106.721845'
                    }
                },
                link: 'walikota/cengkarengBarat'
            },
            {
                id: 4,
                nama: 'Walikota Cengkareng Timur',
                alamat: 'Jl. Fajar Baru Utara, Cengkareng, ',
                kodePos: 'Jakarta Barat, 11730',
                telp: 'Telp. +62 21 6198529',
                email: 'Email: walikota-cengkareng-timur@jakarta-utara.id',
                jamBuka: 'Senin - Jumat 09:00 - 17:00',
                map: {
                    zoom: 18,
                    center: {
                        latitude: '-6.145154',
                        longitude: '106.733279'
                    }
                },
                link: 'walikota/cengkarengTimur'
            },
            {
                id: 5,
                nama: 'Walikota Rawa Buaya',
                alamat: 'Jl. Bojong Raya No. 48M, RT 05 RW 04, Rawa Buaya',
                kodePos: 'Jakarta Barat, 11740',
                telp: 'Telp. 021-983426',
                email: 'Email: walikota-rawa-buaya@jakarta-barat.id',
                jamBuka: 'Senin - Jumat 09:00 - 17:00',
                map: {
                    zoom: 18,
                    center: {
                        latitude: '-6.170794',
                        longitude: '106.731184'
                    }
                },
                link: 'walikota/rawaBuaya'
            },
            {
                id: 6,
                nama: 'Walikota Duri Kosambi',
                alamat: 'Jl. Raya Duri Kosambi, Cengkareng',
                kodePos: 'Jakarta Barat, 11750',
                telp: 'Telp. 021-787878',
                email: 'Email: walikota-duri-kosambi@jakarta-barat.id',
                jamBuka: 'Senin - Jumat 09:00 - 17:00',
                map: {
                    zoom: 18,
                    center: {
                        latitude: '-6.170080',
                        longitude: '106.722279'
                    }
                },
                link: 'walikota/duriKosambi'
            }
        ];

        $scope.currentWalikota = $scope.daftarWalikota[0];

        $scope.isShowResultWalikota = false;

        $scope.isShowKabupatenKota = false;
        $scope.isShowKecamatan = false;
        $scope.isShowKelurahan = false;

        $scope.filterStep = 1;

        $scope.changeProvinsi = function (selectedProvinsi) {
            if (selectedProvinsi.id !== 0) {
                $scope.filterStep = 2;
            } else {
                $scope.filterStep = 1;
            }

            $scope.updateQuestionsView($scope.filterStep);
        };

        $scope.changeKabupatenKota = function (selectedKabupatenKota) {
            if (selectedKabupatenKota.id !== 0) {
                $scope.filterStep = 3;
                $scope.currentWalikota = $scope.daftarWalikota[selectedKabupatenKota.id];
            } else {
                $scope.filterStep = 2;
            }

            $scope.updateQuestionsView($scope.filterStep);
        };

        $scope.changeKecamatan = function (selectedKecamatan) {
            if (selectedKecamatan.id !== 0) {
                $scope.filterStep = 4;
            } else {
                $scope.filterStep = 3;
            }

            $scope.updateQuestionsView($scope.filterStep);
        };

        $scope.changeKelurahan = function (selectedKelurahan) {
            if (selectedKelurahan.id !== 0) {
                $scope.filterStep = 5;
                $scope.currentWalikota = $scope.daftarWalikota[selectedKelurahan.id];
            } else {
                $scope.filterStep = 4;
            }

            $scope.updateQuestionsView($scope.filterStep);
        };

        $scope.updateQuestionsView = function (filterStep) {
            if (filterStep === 1) {
                $scope.isShowKabupatenKota = false;
                $scope.isShowResultWalikota = false;
            }
            else if (filterStep === 2) {
                $scope.isShowKabupatenKota = true;
                $scope.isShowResultWalikota = false;
            }
            else if (filterStep === 3) {
                $scope.isShowKabupatenKota = true;
                $scope.isShowResultWalikota = true;
            }
            else if (filterStep === 4) {
                $scope.isShowKabupatenKota = true;
                $scope.isShowKecamatan = true;
                $scope.isShowKelurahan = true;
                $scope.isShowResultWalikota = false;
            }
            else if (filterStep === 5) {
                $scope.isShowResultWalikota = true;
                $scope.isShowKabupatenKota = true;
                $scope.isShowKecamatan = true;
                $scope.isShowKelurahan = true;
            }
        };

        $scope.gotoWalikota = function(link){
            console.log(link);
            window.location = link;
        };

    }]);