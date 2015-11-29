
hackMdk3App.controller('PasporController', ['$scope', '$location',
    function ($scope, $location) {

        if ($location.path() === '/paspor') {
            $scope.templateUrl = 'templates/paspor.info.tpl.html';
        }
        else if ($location.path() === '/imb/deskripsi') {
            $scope.templateUrl = 'templates/paspor.deskripsi.tpl.html';
        }
        else if ($location.path() === '/imb/lokasi') {
            $scope.templateUrl = 'templates/paspor.lokasi.tpl.html';
        }
        else if ($location.path() === '/imb/statistik') {
            $scope.templateUrl = 'templates/paspor.statistik.tpl.html';
        }
        else if ($location.path() === '/imb/persyaratan') {
            $scope.templateUrl = 'templates/paspor.persyaratan.tpl.html';
        }
        else if($location.path() === '/imb/proses') {
            $scope.templateUrl = 'templates/paspor.proses.tpl.html';
        }
        else if($location.path() === '/imb/lapor') {
            $scope.templateUrl = 'templates/paspor.lapor.tpl.html';
        }
        else {
            $scope.templateUrl = 'templates/paspor.info.tpl.html';
        }

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $(".rating").rating({
            readonly: true,
            showClear: false
        });

        $scope.testFunction = function(){
            alert('testing....');
            $scope.testValue = 'testing value...';
        };


    }]);