/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('IndexController', ['$scope', 'IndexService', function ($scope, indexService) {
    indexService.findAll().then(function(data) {
        $scope.highlights = data;
    });
}]);