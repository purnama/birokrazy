/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.factory('AuthService', ['$http', '$rootScope', '$constant', '$cookies', '$route', '$location', '$routeParams',
    function ($http, $rootScope, $constant, $cookies, $route, $location, $routeParams) {
        var authService = {
            authenticate: function (credentials, callback) {
                if ($cookies.getObject("authenticated")) {
                    $rootScope.authenticated = $cookies.getObject("authenticated");
                    $rootScope.user = $cookies.getObject("user");
                } else {
                    var headers = credentials ? {
                        authorization: "Basic " + btoa(credentials.username + ":" + credentials.password)
                    } : {};
                    // $http returns a promise, which has a then function, which also returns a promise
                    $http.get($constant.apiVersion.protected + '/login', {
                        headers: headers
                    }).then(function (response) {
                        $rootScope.authenticated = true;
                        $cookies.putObject("authenticated", true);
                        $rootScope.user = response.data;
                        $cookies.putObject("user", response.data);
                        return callback && callback();
                    }, function (response) {
                        $rootScope.authenticated = false;
                        return callback && callback();
                    });
                }
            },
            invalidate: function (callback) {
                $http.get('/logout', {}).then(function (response) {
                    $rootScope.authenticated = false;
                    $rootScope.user = undefined;
                    $cookies.remove("authenticated");
                    $cookies.remove("user");
                    return callback && callback();
                }, function (response) {
                    $rootScope.authenticated = false;
                    return callback && callback();
                });
            },
            authorize: function ($scope, callback) {
                var current = $route.routes[$location.path()];
                var test = $routeParams;
                $scope.templateUrl = undefined;
                if (current.access !== undefined) {
                    var user = $rootScope.user,
                        loweredPermissions = [],
                        hasPermission = true,
                        access = current.access;
                    if (access.requiresLogin === true && user === undefined) {
                        $scope.templateUrl = $constant.templates.login;
                    } else if ((access.requiresLogin === true && user !== undefined) &&
                        (access.permissions === undefined || access.permissions.length === 0)) {
                        // Login is required but no specific permissions are specified.
                        $scope.templateUrl = $constant.templates.error401;
                    } else if (access.permissions) {
                        loweredPermissions = [];
                        angular.forEach(user.roles, function (userRole) {
                            loweredPermissions.push(userRole.role.toLowerCase());
                        });
                        for (var i = 0; i < access.permissions.length; i += 1) {
                            var permission = access.permissions[i].toLowerCase();
                            if (!access.atLeastOne) {
                                hasPermission = hasPermission && loweredPermissions.indexOf(permission) > -1;
                                // if all the permissions are required and hasPermission is false there is no point carrying on
                                if (hasPermission === false) {
                                    $scope.templateUrl = $constant.templates.error403;
                                    break;
                                }
                            } else if (access.atLeastOne) {
                                hasPermission = loweredPermissions.indexOf(permission) > -1;
                                // if we only need one of the permissions and we have it there is no point carrying on
                                if (hasPermission) {
                                    break;
                                }
                            }
                        }
                        if (hasPermission === false) {
                            $scope.templateUrl = $constant.templates.error403;
                        }


                    }
                }
                if(!$scope.templateUrl) {
                    return callback && callback();
                }
            }
        };
        return authService;
    }]);
