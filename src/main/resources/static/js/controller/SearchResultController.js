/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.controller('SearchResultController', ['$scope', '$location',
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

        $scope.finds = [
            {name: 'Izin Usaha Ritel', url: "/izin-usaha"},
            {name: 'Surat Izin Usaha Perdagangan', url: "#"},
            {name: 'Izin Mendirikan bangunan', url: "/imb"},
            {name: 'Kartu Tanda Penduduk', url: "#"},
            {name: 'Kartu Tanda Penduduk Elektronik', url: "/e-ktp"},
            {name: 'KTP', url: "#"},
            {name: 'E-KTP', url: "/e-ktp"},
            {name: 'Paspor', url: "/paspor"}
        ];

        $scope.selectAction = function ($item, $model, $label) {
            $location.path($model.url);
        };
    }]);