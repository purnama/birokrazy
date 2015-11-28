/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('ReviewController', ['$scope', function ($scope) {
    $(".rating").rating({
        readonly: true,
        showClear: false
    });
}]);