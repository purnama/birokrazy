/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.controller('AuthController', ['$rootScope', '$scope', '$location', '$constant', '$localStorage', '$window', 'AuthService',
    function ($rootScope, $scope, $location, $constant, $localStorage, $window, authService) {
        $scope.credentials = {};
        if ($localStorage.authenticated) {
            $rootScope.authenticated = $localStorage.authenticated;
            $rootScope.user = $localStorage.user;
            $scope.userObj = $rootScope.user;
        }
        $scope.login = function () {
            authService.authenticate($scope.credentials, function () {
                if ($rootScope.authenticated) {
                    $scope.error = false;
                    $scope.userObj = $rootScope.user;
                    if ($location.path() === $constant.routes.login) {
                        var loginRedirect = $rootScope.loginRedirect || $constant.routes.index;
                        $rootScope.loginRedirect = null;
                        $location.path(loginRedirect);
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