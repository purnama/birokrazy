/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('HeaderController', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);