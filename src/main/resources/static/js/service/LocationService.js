/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.factory('LocationService', ['$http', '$constant', function ($http, $constant) {
    var locationService = {
        daftarProvinsi: [
            {id: 1, name: '-- Pilih Propinsi --'},
            {id: 2, name: 'DKI Jakarta'},
            {id: 3, name: 'Jawa Tengah'},
            {id: 4, name: 'Jawa Timur'}
        ],

        daftarKabupatenKota: [
            {id: 1, name: '-- Pilih Kabupaten/Kota --'},
            {id: 2, name: 'Jakarta Barat'},
            {id: 3, name: 'Jakarta Timur'},
            {id: 4, name: 'Jakarta Utara'},
            {id: 5, name: 'Jakarta Selatan'},
            {id: 6, name: 'Jakarta Pusat'}
        ],

        daftarKecamatan: [
            {id: 1, name: '-- Pilih Kecamatan --'},
            {id: 2, name: 'Cengkareng'},
            {id: 3, name: 'Grogol Petamburan'},
            {id: 4, name: 'Kalideres'},
            {id: 5, name: 'Kebon Jeruk'},
            {id: 6, name: 'Kembangan'}
        ],

        daftarKelurahan: [
            {id: 1, name: '-- Pilih Kelurahan --'},
            {id: 2, name: 'Kedaung'},
            {id: 3, name: 'Kapuk'},
            {id: 4, name: 'Cengkareng Barat'},
            {id: 5, name: 'Cengkareng Timur'},
            {id: 6, name: 'Rawa Buaya'},
            {id: 7, name: 'Duri Kosambi'}
        ]
    };

    return locationService;
}]);
