/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
oldModule.controller('oldModule.UserController', ['$scope', '$constant', 'UserService', 'ErrorService', '$location',
    function ($scope, $constant, userService, errorService, $location) {
        if ($location.path() === '/'+$constant.module.old.path+'/user/application') {
            $scope.templateUrl = $constant.module.old.templates+'user.application.list.tpl.html';
        } else if ($location.path() === '/'+$constant.module.old.path+'/user') {
            userService.findAll(function (response) {
                $scope.users = response.data;
                $scope.templateUrl = $constant.module.old.templates+'user.tpl.html';
            }, function (response) {
                $scope.templateUrl = errorService.manageError(response.status);
            });
        }

    }]);