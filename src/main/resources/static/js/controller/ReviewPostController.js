/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.controller('ReviewPostController', ['$scope', '$rootScope', '$location', '$constant', '$window', '$routeParams', 'CivilServiceService',
    function ($scope, $rootScope, $location, $constant, $window, $routeParams, civilServiceService) {
        var locationArray = $location.path().split("/");
        $scope.reviewPost = {
            'civilService' : $routeParams.name
        };


        if (locationArray[1] === $constant.module.service.path) {
            $scope.reviewPostTemplateUrl = 'templates/include.review.service.post.tpl.html';
        } else if (locationArray[1] === $constant.module.department.path) {
            $scope.reviewPostTemplateUrl = 'templates/include.review.department.post.tpl.html';
        }

        $scope.duration = {
            modal: false,
            checked: false,
            units: $constant.duration.units,
            value: 2,
            unit: $constant.duration.minggu
        };

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
                $rootScope.loginRedirect = $location.path();
                $location.path($constant.routes.login);
            }
        };

        $scope.submitAction = function () {
            civilServiceService.saveReview($scope.reviewPost).then(function (data) {
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