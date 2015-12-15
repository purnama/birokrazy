/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.controller('IndexController', ['$scope', 'IndexService', function ($scope, indexService) {
    indexService.findAll().then(function(data) {
        $scope.highlights = data;
    });
}]);