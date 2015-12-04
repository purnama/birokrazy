/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('HeaderController', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        /* return viewLocation === $location.path(); */
        var isDebug = false;

        if(isDebug) {
            console.log('if : ' + viewLocation + ' same : ' + $location.path());
        }

        if(viewLocation.length > 1) {
            return $location.path().indexOf(viewLocation) === 0;
        }else {
            return viewLocation === $location.path();
        }
    };
}]);