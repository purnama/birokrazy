/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.controller('HeaderController', ['$scope', '$location', '$routeParams', 'CivilServiceService',
    function ($scope, $location, $routeParams, civilServiceService) {
        civilServiceService.findAll().then(function(data){
           $scope.serviceList = data;
        });
        $scope.isActive = function (viewLocation) {
            if (viewLocation.length > 1) {
                return $location.path().indexOf(viewLocation) === 0;
            } else {
                return viewLocation === $location.path();
            }
        };

        $scope.isStartActive = function () {
            return ('/' === $location.path()) ? true : false;
        };
        
        $scope.isServiceActive = function () {
          return ('service' === $routeParams.name) ? true : false;
        };

        $scope.isDepartmentActive = function (){
            return ('department' === $routeParams.name) ? true : false;
        }
    }]);