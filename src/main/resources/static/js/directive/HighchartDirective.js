/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.directive("hackmdk3Highchart", function () {
    return {
        restrict: 'A',
        scope : {
            model : '=ngModel'
        },
        link: function (scope, iElement, iAttrs) {
            $(iElement).highcharts(scope.model);
        }
    }
});