/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.directive("hackmdk3StarRating", function(){
    return {
        restrict: 'A',
        link: function(scope, iElement, iAttrs) {
            $(iElement).rating({
                readonly: iAttrs.readonly?true:false,
                showClear: false,
                showCaption: false
            });
        }
    }
});