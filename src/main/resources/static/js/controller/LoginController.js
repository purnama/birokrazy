/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('LoginController', ['$rootScope', '$scope', '$location', 'LoginService', function ($rootScope, $scope, $location, loginService) {
    loginService.authenticate();
    $scope.credentials = {};
    $scope.login = function() {
        loginService.authenticate($scope.credentials, function() {
            if ($rootScope.authenticated) {
                $scope.error = false;
            } else {
                $scope.error = true;
            }
        });
    };
}]);