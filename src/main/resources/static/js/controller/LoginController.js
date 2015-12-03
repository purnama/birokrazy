/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('LoginController', ['$scope', '$rootScope', '$location',
    function ($scope, $rootScope, $location) {
    if($rootScope.authenticated){
        $location.path("/user/application");
    }
}]);