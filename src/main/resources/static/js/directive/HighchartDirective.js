/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.directive("birokrazyHighchart", function () {
    return {
        restrict: 'A',
        scope : {
            model : '=ngModel'
        },
        link: function (scope, iElement, iAttrs) {
            $(iElement).highcharts(scope.model);
        }
    };
});