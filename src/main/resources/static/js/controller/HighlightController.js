hackMdk3App.controller('HighlightController', ['$scope', 'HighlightService', function ($scope, highlightService) {
    highlightService.findAll().then(function(data) {
        $scope.highlights = data;
    });
}]);