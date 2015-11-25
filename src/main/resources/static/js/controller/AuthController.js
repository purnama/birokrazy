/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('AuthController', ['$rootScope', '$scope', '$location', '$constant', 'AuthService',
    function ($rootScope, $scope, $location, $constant, authService) {
    $scope.credentials = {};
    $scope.login = function() {
        authService.authenticate($scope.credentials, function() {
            if ($rootScope.authenticated) {
                $scope.error = false;
                $scope.user = $rootScope.user
                if($location.path() === $constant.routes.login){
                    $location.path($constant.routes.index);
                }
            } else {
                $scope.error = true;
                $scope.user = undefined;
            }
        });
    };
    $scope.logout = function() {
        authService.invalidate(function(){
            if (!$rootScope.authenticated) {
                $scope.error = false;
                $scope.user = undefined;
                $location.path($constant.routes.index);
            } else {
                $scope.error = true;
                $scope.user = undefined;
            }
        });
    }
}]);