/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('UserController', ['$scope', '$constant', 'UserService', 'AuthService', 'ErrorService', '$location',
    function ($scope, $constant, userService, authService, errorService, $location) {
        authService.authorize($scope, function () {
            userService.findAll(function (response) {
                $scope.users = response.data;
                $scope.templateUrl = "templates/user.tpl.html";
            }, function (response) {
                $scope.templateUrl = errorService.manageError(response.status);
            });
        });

        if($location.path() === '/user/myDocument') {
            $scope.templateUrl = 'templates/user.dokument.list.tpl.html';
        }
    }]);