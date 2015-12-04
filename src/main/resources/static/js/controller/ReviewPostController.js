/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('ReviewPostController', ['$scope', '$rootScope', '$cookies', '$location', '$constant',
    function ($scope, $rootScope, $cookies, $location, $constant) {
        $scope.facebookAction = function () {
            $scope.facebook = $scope.facebook ? false : true;
        }
        $scope.twitterAction = function () {
            $scope.twitter = $scope.twitter ? false : true;
        }
        $scope.showPostAction = function () {
            if ($rootScope.authenticated) {
                $scope.showPost = $scope.showPost ? false : true;
            }else{
                $cookies.loginDestination = $location.path();
                $location.path($constant.routes.login);
            }
        }
        $scope.submitAction = function (alert) {
            $scope.showPost = false;
            $scope.alert = alert;
            $scope.successMessage = 'Your review is successfully posted.';
            window.setTimeout(function () {
                $('.alert').alert('close');
            }, 3000);
        }
    }]);