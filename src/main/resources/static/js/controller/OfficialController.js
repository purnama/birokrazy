/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('OfficialController', ['$scope', 'AuthService', function ($scope, authService) {
    authService.authorize($scope, function () {
        $scope.templateUrl = "templates/official.tpl.html";
    });
}]);