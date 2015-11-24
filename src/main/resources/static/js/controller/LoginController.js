/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('LoginController', ['$rootScope', '$scope', '$location', 'LoginService', function ($rootScope, $scope, $location, loginService) {
    loginService.authenticate();
    $scope.credentials = {};
    $scope.login = function() {
        loginService.authenticate($scope.credentials, function() {
            if ($rootScope.authenticated) {
                $location.path("/");
                $scope.error = false;
            } else {
                $location.path("/login");
                $scope.error = true;
            }
        });
    };
}]);