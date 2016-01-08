/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.controller('SearchResultController', ['$scope', '$location', 'SearchService',
    function ($scope, $location, searchService) {
        $scope.serviceOrDepartmentSelected = undefined;
        $scope.locationSelected = undefined;

        if ($location.path() === '/search/pelayanan') {
            $scope.templateUrl = 'templates/search.result.pelayanan.tpl.html';
        } else if ($location.path() === '/search/instansi') {
            $scope.templateUrl = 'templates/search.result.instansi.tpl.html';
        }

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.findServiceOrDepartment = searchService.searchServiceOrDepartment;

        $scope.findLocation = searchService.searchLocation;

        $scope.submit = function () {
            console.log($scope.serviceOrDepartmentSelected);
            console.log($scope.locationSelected);
        };
    }]);