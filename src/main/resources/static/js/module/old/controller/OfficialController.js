/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
oldModule.controller('oldModule.OfficialController', ['$scope', 'AuthService', function ($scope, authService) {
    authService.authorize($scope, function () {
        $scope.templateUrl = "templates/official.tpl.html";
    });
}]);