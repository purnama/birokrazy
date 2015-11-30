/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('ReviewPostController', ['$scope', '$rootScope',
    function ($scope, $rootScope) {
        $scope.facebookAction = function () {
            $scope.facebook = $scope.facebook ? false : true;
        }
        $scope.twitterAction = function () {
            $scope.twitter = $scope.twitter ? false : true;
        }
        $scope.showPostAction = function (){
            $scope.showPost = $scope.showPost ? false : true;
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