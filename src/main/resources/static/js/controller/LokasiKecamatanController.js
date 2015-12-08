/**
 * Created by hackathon on 04.12.15.
 */

hackMdk3App.controller('LokasiKecamatanController', ['$scope', '$location', 'uiGmapGoogleMapApi',
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

        $scope.daftarKecamatan = [
            {id: 0, name: '-- Pilih Kecamatan --'},
            {id: 1, name: 'Cengkareng'},
            {id: 2, name: 'Grogol Petamburan'},
            {id: 3, name: 'Kalideres'},
            {id: 4, name: 'Kebon Jeruk'},
            {id: 5, name: 'Kembangan'}
        ];

        $scope.listKecamatan = [
            {id: 0, nama: '-', alamat: '-', kodePos: '-', telp: '-', email: '-', jamBuka: '-'},
            {
                id: 1,
                nama: 'Kecamatan Kedaung',
                alamat: 'Jl. Komplek Departemen Agama, Kedaung Kali Angke',
                kodePos: 'Jakarta Barat, 10011',
                telp: 'Telp. 021-112233',
                email: 'Email: kecamatan-kedaung@jakarta-barat.id',
                jamBuka: 'Senin - Jumat 09:00 - 17:00',
                map: {
                    zoom: 18,
                    center: {
                        latitude: '-6.153593',
                        longitude: '106.762150'
                    }
                },
                link: 'kecamatan/kedaung'
            },
            {
                id: 2,
                nama: 'Kecamatan Kapuk',
                alamat: 'JL. Kapuk Raya, No.1 RT. 002/03',
                kodePos: 'Jakarta Barat, 10022',
                telp: 'Telp. 021-554433',
                email: 'Email: kecamatan-kapuk@jakarta-utara.id',
                jamBuka: 'Senin - Jumat 09:00 - 17:00',
                map: {
                    zoom: 18,
                    center: {
                        latitude: '-6.131836',
                        longitude: '106.747880'
                    }
                },
                link: 'kecamatan/kapuk'
            },
            {
                id: 3,
                nama: 'Kecamatan Cengkareng Barat',
                alamat: 'Jl. Utama Raya No.42, Cengkareng',
                kodePos: 'Jakarta Barat, 11730',
                telp: 'Telp. 021-121212',
                email: 'Email: kecamatan-cengkareng-barat@jakarta-barat.id',
                jamBuka: 'Senin - Jumat 09:00 - 17:00',
                map: {
                    zoom: 18,
                    center: {
                        latitude: '-6.149574',
                        longitude: '106.721845'
                    }
                },
                link: 'kecamatan/cengkarengBarat'
            },
            {
                id: 4,
                nama: 'Kecamatan Cengkareng Timur',
                alamat: 'Jl. Fajar Baru Utara, Cengkareng, ',
                kodePos: 'Jakarta Barat, 11730',
                telp: 'Telp. +62 21 6198529',
                email: 'Email: kecamatan-cengkareng-timur@jakarta-utara.id',
                jamBuka: 'Senin - Jumat 09:00 - 17:00',
                map: {
                    zoom: 18,
                    center: {
                        latitude: '-6.145154',
                        longitude: '106.733279'
                    }
                },
                link: 'kecamatan/cengkarengTimur'
            },
            {
                id: 5,
                nama: 'Kecamatan Rawa Buaya',
                alamat: 'Jl. Bojong Raya No. 48M, RT 05 RW 04, Rawa Buaya',
                kodePos: 'Jakarta Barat, 11740',
                telp: 'Telp. 021-983426',
                email: 'Email: kecamatan-rawa-buaya@jakarta-barat.id',
                jamBuka: 'Senin - Jumat 09:00 - 17:00',
                map: {
                    zoom: 18,
                    center: {
                        latitude: '-6.170794',
                        longitude: '106.731184'
                    }
                },
                link: 'kecamatan/rawaBuaya'
            },
            {
                id: 6,
                nama: 'Kecamatan Duri Kosambi',
                alamat: 'Jl. Raya Duri Kosambi, Cengkareng',
                kodePos: 'Jakarta Barat, 11750',
                telp: 'Telp. 021-787878',
                email: 'Email: kecamatan-duri-kosambi@jakarta-barat.id',
                jamBuka: 'Senin - Jumat 09:00 - 17:00',
                map: {
                    zoom: 18,
                    center: {
                        latitude: '-6.170080',
                        longitude: '106.722279'
                    }
                },
                link: 'kecamatan/duriKosambi'
            }
        ];

        $scope.currentKecamatan = $scope.listKecamatan[0];

        $scope.isShowResultKecamatan = false;

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
            } else {
                $scope.filterStep = 2;
            }

            $scope.updateQuestionsView($scope.filterStep);
        };

        $scope.changeKecamatan = function (selectedKecamatan) {
            if (selectedKecamatan.id !== 0) {
                $scope.filterStep = 4;
                $scope.currentKecamatan = $scope.listKecamatan[selectedKecamatan.id];
            } else {
                $scope.filterStep = 3;
            }

            $scope.updateQuestionsView($scope.filterStep);
        };

        $scope.changeKelurahan = function (selectedKelurahan) {
            if (selectedKelurahan.id !== 0) {
                $scope.filterStep = 5;
                $scope.currentKecamatan = $scope.listKecamatan[selectedKelurahan.id];
            } else {
                $scope.filterStep = 4;
            }

            $scope.updateQuestionsView($scope.filterStep);
        };

        $scope.updateQuestionsView = function (filterStep) {
            if (filterStep === 1) {
                $scope.isShowKabupatenKota = false;
                $scope.isShowKecamatan = false;
                $scope.isShowResultKecamatan = false;
            }
            else if (filterStep === 2) {
                $scope.isShowKabupatenKota = true;
                $scope.isShowKecamatan = false;
                $scope.isShowResultKecamatan = false;
            }
            else if (filterStep === 3) {
                $scope.isShowKabupatenKota = true;
                $scope.isShowKecamatan = true;
                $scope.isShowResultKecamatan = false;
            }
            else if (filterStep === 4) {
                $scope.isShowKabupatenKota = true;
                $scope.isShowKecamatan = true;
                $scope.isShowResultKecamatan = true;
            }
            else if (filterStep === 5) {
                $scope.isShowResultKecamatan = true;
                $scope.isShowKabupatenKota = true;
                $scope.isShowKecamatan = true;
                $scope.isShowKelurahan = true;
            }
        };

        $scope.gotoKecamatan = function(link){
            console.log(link);
            window.location = link;
        };

    }]);