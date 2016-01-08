/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
departmentModule.controller('departmentModule.DepartmentController', ['$scope', '$location', '$constant', '$routeParams', 'HighchartService',
    'DurationModalService', 'DepartmentService',
    function ($scope, $location, $constant, $routeParams, highchartService, durationModalService, departmentService) {

        $scope.waitingTime = highchartService.waitingTime;
        $scope.department = {};
        $scope.modulePath = $constant.module.department.path;
        departmentService.findById($routeParams.name).then(function (data) {
            data.geoLocation = {
                latitude: data.latitude,
                longitude: data.longitude
            };
            $scope.department = data;
            $scope.departmentPath = $routeParams.name;
            if ($location.path() === '/' + $constant.module.department.path + '/' + $scope.departmentPath + '/review') {
                departmentService.findAllReviewById($routeParams.name).then(function (data) {
                    $scope.department.reviewList = data;
                    $scope.templateUrl = 'templates/include.review.tpl.html';
                });
            } else if ($location.path() === '/' + $constant.module.department.path + '/' + $scope.departmentPath + '/trend') {
                $scope.templateUrl = 'templates/include.trend.tpl.html';
            } else if ($location.path() === '/' + $constant.module.department.path + '/' + $scope.departmentPath + '/process') {
                $scope.templateUrl = 'templates/department.process.tpl.html';
            } else if ($location.path() === '/' + $constant.module.department.path + '/' + $scope.departmentPath) {
                $scope.templateUrl = $constant.module.department.templates + 'department.info.tpl.html';
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