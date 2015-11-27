/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('RequirementController', ['$scope', 'AuthService', function ($scope, authService) {
    authService.authorize($scope, function () {
        $scope.templateUrl = "templates/requirement.tpl.html";
    });
}]);