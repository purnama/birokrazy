/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.directive("birokrazyStarRating", function(){
    return {
        restrict: 'A',
        scope : {
            model : '=ngModel'
        },
        link: function(scope, iElement, iAttrs) {
            if(scope.model) {
                $(iElement).val(scope.model);
            }
            $(iElement).rating({
                readonly: iAttrs.readonly?true:false,
                showClear: false,
                showCaption: false
            });
        }
    };
});