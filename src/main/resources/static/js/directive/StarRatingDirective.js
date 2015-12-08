/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.directive("hackmdk3StarRating", function(){
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