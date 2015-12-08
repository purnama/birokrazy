/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.controller('ReviewPostController', ['$scope', '$rootScope', '$cookies', '$location', '$constant', '$window', 'CivilServiceService',
    function ($scope, $rootScope, $cookies, $location, $constant, $window, civilServiceService) {
        $scope.reviewPost = {};
        $scope.facebookAction = function () {
            $scope.facebook = $scope.facebook ? false : true;
        };
        $scope.twitterAction = function () {
            $scope.twitter = $scope.twitter ? false : true;
        };
        $scope.showPostAction = function () {
            if ($rootScope.authenticated) {
                $scope.showPost = $scope.showPost ? false : true;
            } else {
                $cookies.loginDestination = $location.path();
                $location.path($constant.routes.login);
            }
        };
        $scope.submitAction = function () {
            var civilService;
            if ($location.path() === '/e-ktp/review') {
                civilService = 1;
            } else if ($location.path() === '/paspor/review') {
                civilService = 2;
            } else if ($location.path() === '/imb/review') {
                civilService = 3;
            } else if ($location.path() === '/izin-usaha/review') {
                civilService = 4;
            }
            $scope.reviewPost.location = 'Kelurahan Kedaung, Kecamatan Cengkareng, Jakarta Barat, DKI Jakarta';
            civilServiceService.saveReview(civilService, $scope.reviewPost).then(function (data) {
                $scope.showPost = false;
                $scope.alert = true;
                $scope.successMessage = 'Your review is successfully posted.';
                window.setTimeout(function () {
                    $('.alert').alert('close');
                    $window.location.reload();
                }, 3000);
            });
        };
    }]);