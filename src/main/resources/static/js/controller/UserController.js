/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.controller('UserController', ['$scope', '$constant', 'UserService', 'ErrorService', '$location',
    function ($scope, $constant, userService, errorService, $location) {
        if ($location.path() === '/user/application') {
            $scope.templateUrl = 'templates/user.application.list.tpl.html';
        } else if ($location.path() === '/user') {
            userService.findAll(function (response) {
                $scope.users = response.data;
                $scope.templateUrl = "templates/user.tpl.html";
            }, function (response) {
                $scope.templateUrl = errorService.manageError(response.status);
            });
        }

    }]);