/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.directive("hackmdk3PopOver", function () {
    return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) {
            $('[data-toggle="tooltip"]').tooltip();
            $('[data-toggle="popover"]').popover();
        }
    };
});