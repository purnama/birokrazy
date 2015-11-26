/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.factory('ErrorService',['$constant', function($constant) {
    var errorService = {
        manageError: function(status) {
            switch (status){
                case 401:
                    return $constant.templates.error401;
                case 403:
                    return $constant.templates.error403;
                case 404:
                    return $constant.templates.error404;
                case 500:
                    return $constant.templates.error500;
                default:
                    return $constant.templates.error520;
            }
        }
    };
    return errorService;
}]);
