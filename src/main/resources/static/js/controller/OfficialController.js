/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.controller('OfficialController', ['$scope', 'AuthService', function ($scope, authService) {
    authService.authorize($scope, function () {
        $scope.templateUrl = "templates/official.tpl.html";
    });
}]);