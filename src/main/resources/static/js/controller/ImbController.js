
hackMdk3App.controller('ImbController', ['$scope', '$location',
    function ($scope, $location) {

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
            $scope.templateUrl = 'templates/imb.lapor.tpl.html';
        }
        else {
            $scope.templateUrl = 'templates/imb.info.tpl.html';
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