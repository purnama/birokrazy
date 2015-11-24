/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.factory('LoginService',['$http', '$rootScope', '$apiVersion' ,function ($http, $rootScope, $apiVersion) {
    var promise;
    var loginService = {
        authenticate: function (credentials, callback) {
            var headers = credentials ? {
                authorization: "Basic "
                + btoa(credentials.username + ":" + credentials.password)
            } : {};
            if (!promise) {
                // $http returns a promise, which has a then function, which also returns a promise
                promise = $http.get($apiVersion.public + '/login', {headers: headers}).then(function (response) {
                    if (response.username) {
                        $rootScope.authenticated = true;
                    } else {
                        $rootScope.authenticated = false;
                    }
                    callback && callback();
                }).error(function () {
                    $rootScope.authenticated = false;
                    callback && callback();
                });
            }
        }
    };
    return loginService;
}]);
