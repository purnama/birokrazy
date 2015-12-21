/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.factory('AuthService', ['$http', '$rootScope', '$constant', '$cookies', '$route', '$location',
    function ($http, $rootScope, $constant, $cookies, $route, $location) {
        var authService = {
            authenticate: function (credentials, callback) {
                if ($cookies.getObject("authenticated")) {
                    $rootScope.authenticated = $cookies.getObject("authenticated");
                    $rootScope.user = $cookies.getObject("user");
                    $rootScope.token = $cookies.getObject("token");
                } else {
                    var headers = credentials ? {
                        authorization: "Basic " + btoa(credentials.username + ":" + credentials.password)
                    } : {};
                    var params = {
                        grant_type: 'client_credentials',
                        client_id: credentials.username,
                        redirect_uri: '/',
                        password: credentials.password
                    };
                    // $http returns a promise, which has a then function, which also returns a promise
                    $http.post($constant.oauth.token, {}, {
                        params: params,
                        headers: headers
                    }).then(function (response) {
                        $rootScope.authenticated = true;
                        $cookies.putObject('authenticated', true);
                        $rootScope.token = response.data;
                        $cookies.putObject('token', response.data);
                        var tokenHeaders = credentials ? {
                            authorization: "Bearer " + $rootScope.token.access_token
                        } : {};
                        $http.get($constant.apiVersion.protected+'/login', {
                            headers: tokenHeaders
                        }).then(function (response) {
                            $rootScope.user = response.data;
                            $cookies.putObject('user', response.data);
                            return callback && callback();
                        });
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
            }
        };
        return authService;
    }]);
