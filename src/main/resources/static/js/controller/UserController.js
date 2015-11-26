/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('UserController', ['$scope', '$constant', 'UserService', 'AuthService', 'ErrorService',
    function ($scope, $constant, userService, authService, errorService) {
        authService.authorize($scope, function () {
            userService.findAll(function (response) {
                $scope.users = response.data;
                $scope.templateUrl = "templates/user.tpl.html";
            }, function (response) {
                $scope.templateUrl = errorService.manageError(response.status);
            });
        });
    }]);