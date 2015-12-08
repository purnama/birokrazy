/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.directive("hackmdk3PopOver", function () {
    return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) {
            $('[data-toggle="tooltip"]').tooltip();
            $('[data-toggle="popover"]').popover();
        }
    };
});