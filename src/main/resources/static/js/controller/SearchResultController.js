/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('SearchResultController', ['$scope', '$location',
    function ($scope, $location) {
        if ($location.path() === '/search/pelayanan') {
            $scope.templateUrl = 'templates/search.result.pelayanan.tpl.html';
        } else if ($location.path() === '/search/instansi') {
            $scope.templateUrl = 'templates/search.result.instansi.tpl.html';
        }

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }]);