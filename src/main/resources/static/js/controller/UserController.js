/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('UserController', ['$scope', '$constant', 'UserService', 'AuthService', 'ErrorService', '$location',
    function ($scope, $constant, userService, authService, errorService, $location) {
        authService.authorize($scope, function () {
            if($location.path() === '/user/application') {
                $scope.templateUrl = 'templates/user.application.list.tpl.html';
            }else if($location.path() === '/user'){
                userService.findAll(function (response) {
                    $scope.users = response.data;
                    $scope.templateUrl = "templates/user.tpl.html";
                }, function (response) {
                    $scope.templateUrl = errorService.manageError(response.status);
                });
            }
        });

    }]);