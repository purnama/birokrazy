/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.controller('AuthController', ['$rootScope', '$scope', '$location', '$constant', '$cookies', '$window', 'AuthService',
    function ($rootScope, $scope, $location, $constant, $cookies, $window, authService) {
        $scope.credentials = {};
        if ($cookies.getObject("authenticated")) {
            $rootScope.authenticated = $cookies.getObject("authenticated");
            $rootScope.user = $cookies.getObject("user");
            $scope.userObj = $rootScope.user;
        }
        $scope.login = function () {
            authService.authenticate($scope.credentials, function () {
                if ($rootScope.authenticated) {
                    $scope.error = false;
                    $scope.userObj = $rootScope.user;
                    if ($location.path() === $constant.routes.login) {
                        var loginDestination = $cookies.loginDestination || $constant.routes.index;
                        $cookies.loginDestination = null;
                        $location.path(loginDestination);
                    }else{
                        $window.location.reload();
                    }
                } else {
                    $scope.error = true;
                    $scope.userObj = undefined;
                }
            });
        };
        $scope.logout = function () {
            authService.invalidate(function () {
                if (!$rootScope.authenticated) {
                    $scope.error = false;
                    $scope.userObj = undefined;
                    $location.path($constant.routes.index);
                } else {
                    $scope.error = true;
                    $scope.userObj = undefined;
                }
            });
        };
    }]);