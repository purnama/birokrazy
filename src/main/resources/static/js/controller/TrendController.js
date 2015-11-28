/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('TrendController', ['$scope', function ($scope) {
    $(".rating").rating({
        readonly: true,
        showClear: false
    });
    $(".rating-small").rating({
        readonly: true,
        showClear: false,
        showCaption: false
    });
}]);