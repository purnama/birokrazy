/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.factory('UserService', ['$http', '$constant', function ($http, $constant) {
    var userService = {
        findAll: function (success, error) {
            $http.get($constant.apiVersion.protected + '/user').then(success, error);
        }
    };
    return userService;
}]);
