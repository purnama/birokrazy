/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.factory('AuthService', ['$http', '$rootScope', '$constant', function ($http, $rootScope, $constant) {
    var authService = {
        authenticate: function (credentials, callback) {
            var headers = credentials ? {
                authorization: "Basic "
                + btoa(credentials.username + ":" + credentials.password)
            } : {};

            var params = credentials ? {
                username: credentials.username
            } : {}
            // $http returns a promise, which has a then function, which also returns a promise
            $http.get($constant.apiVersion.protected + '/login', {
                headers: headers,
                params: params
            }).then(function successCallback(response) {
                $rootScope.authenticated = true;
                $rootScope.user = response.data;
                callback && callback();
            }, function errorCallback(response) {
                $rootScope.authenticated = false;
                callback && callback();
            });
        },
        invalidate: function (callback) {
            $http.get('/logout', {}).then(function successCallback(response) {
                $rootScope.authenticated = false;
                callback && callback();
            }, function errorCallback(response) {
                $rootScope.authenticated = false;
                callback && callback();
            });

        },
        authorize: function (loginRequired, requiredPermissions, atLeastOne) {
            var result = false,
                user = $rootScope.user,
                loweredPermissions = [],
                hasPermission = true,
                permission, i;
            if (loginRequired === true && user === undefined) {
                result = $constant.authorised.loginRequired;
            } else if ((loginRequired === true && user !== undefined) &&
                (requiredPermissions === undefined || requiredPermissions.length === 0)) {
                // Login is required but no specific permissions are specified.
                result = $constant.authorised.notAuthorised;
            } else if (requiredPermissions) {
                loweredPermissions = [];
                angular.forEach(user.permissions, function (permission) {
                    loweredPermissions.push(permission.toLowerCase());
                });

                for (i = 0; i < requiredPermissions.length; i += 1) {
                    permission = requiredPermissions[i].toLowerCase();

                    if (!atLeastOne) {
                        hasPermission = hasPermission && loweredPermissions.indexOf(permission) > -1;
                        // if all the permissions are required and hasPermission is false there is no point carrying on
                        if (hasPermission === false) {
                            break;
                        }
                    } else if (atLeastOne) {
                        hasPermission = loweredPermissions.indexOf(permission) > -1;
                        // if we only need one of the permissions and we have it there is no point carrying on
                        if (hasPermission) {
                            break;
                        }
                    }
                }

                result = hasPermission ? $constant.authorised.authorised : result;
            }

            return result;
        }
    };
    return authService;
}]);
