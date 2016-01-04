/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.factory('AuthService', ['$http', '$rootScope', '$constant', '$localStorage', '$route', '$location',
    function ($http, $rootScope, $constant, $localStorage, $route, $location) {
        var authService = {
            authenticate: function (credentials, callback) {
                if ($localStorage.authenticated) {
                    $rootScope.authenticated = $localStorage.authenticated;
                    $rootScope.user = $localStorage.user;
                    $rootScope.token = $localStorage.token;
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
                        $localStorage.authenticated = true;
                        $rootScope.token = response.data;
                        $localStorage.token = response.data;
                        var tokenHeaders = credentials ? {
                            authorization: "Bearer " + $rootScope.token.access_token
                        } : {};
                        $http.get($constant.apiVersion.protected+'/login', {
                            headers: tokenHeaders
                        }).then(function (response) {
                            $rootScope.user = response.data;
                            $localStorage.user = response.data;
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
                    delete $rootScope.authenticated;
                    delete $rootScope.user;
                    delete $localStorage.authenticated;
                    delete $localStorage.user;
                    return callback && callback();
                }, function (response) {
                    $rootScope.authenticated = false;
                    return callback && callback();
                });
            }
        };
        return authService;
    }]);
