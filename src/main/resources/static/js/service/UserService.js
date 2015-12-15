/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.factory('UserService', ['$http', '$constant', function ($http, $constant) {
    var userService = {
        findAll: function (success, error) {
            $http.get($constant.apiVersion.protected + '/user').then(success, error);
        }
    };
    return userService;
}]);
