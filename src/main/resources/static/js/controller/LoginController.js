/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('LoginController', ['$scope', '$rootScope', '$location', '$constant',
    function ($scope, $rootScope, $location, $constant) {
    if($rootScope.authenticated){
        $location.path($constant.routes.index);
    }
}]);