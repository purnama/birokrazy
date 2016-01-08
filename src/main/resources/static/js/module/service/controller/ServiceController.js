/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
serviceModule.controller('serviceModule.ServiceController', ['$scope', '$location', '$constant', '$routeParams', 'HighchartService',
    'DurationModalService', 'CivilServiceService',
    function ($scope, $location, $constant, $routeParams, highchartService, durationModalService, civilServiceService) {

        function chunk(arr, size) {
            var newArr = [];
            for (var i=0; i<arr.length; i+=size) {
                newArr.push(arr.slice(i, i+size));
            }
            return newArr;
        }

        $scope.waitingTime = highchartService.waitingTime;
        $scope.civilService = {};
        $scope.modulePath = $constant.module.service.path;
        civilServiceService.findById($routeParams.name).then(function (data) {
            $scope.civilService = data;
            $scope.civilService.infographicList = chunk($scope.civilService.infographicList, 4);
            $scope.servicePath = $routeParams.name;
            if ($location.path() === '/' + $constant.module.service.path + '/' + $scope.servicePath + '/review') {
                civilServiceService.findAllReviewById($routeParams.name).then(function (data) {
                    $scope.civilService.reviewList = data;
                    $scope.templateUrl = 'templates/include.review.tpl.html';
                });
            } else if ($location.path() === '/' + $constant.module.service.path + '/' + $scope.servicePath + '/trend') {
                $scope.templateUrl = 'templates/include.trend.tpl.html';
            } else if ($location.path() === '/' + $constant.module.service.path + '/' + $scope.servicePath + '/process') {
                $scope.templateUrl = 'templates/service.process.tpl.html';
            } else if ($location.path() === '/' + $constant.module.service.path + '/' + $scope.servicePath) {
                $scope.templateUrl = $constant.module.service.templates + 'service.info.tpl.html';
            }
        });


        $scope.modalOpen = function () {
            durationModalService.open($scope);
        };

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }
])
;