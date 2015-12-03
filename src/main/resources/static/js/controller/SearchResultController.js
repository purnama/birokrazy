/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('SearchResultController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.selected = undefined;

        if ($location.path() === '/search/pelayanan') {
            $scope.templateUrl = 'templates/search.result.pelayanan.tpl.html';
        } else if ($location.path() === '/search/instansi') {
            $scope.templateUrl = 'templates/search.result.instansi.tpl.html';
        }

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.finds = ['Izin Usaha Toko', 'Surat Izin Usaha Perdagangan', 'Izin Mendirikan bangunan', 'Kartu Tanda Penduduk',
        'Kartu Tanda Penduduk Elektronik', 'KTP', 'E-KTP', 'Paspor'];
    }]);