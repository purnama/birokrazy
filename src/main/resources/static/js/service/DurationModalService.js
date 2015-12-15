/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.factory('DurationModalService', ['$uibModal', '$constant', function ($uibModal) {
    var durationModalService = {
        open: function ($scope) {
            if (!$scope.duration.checked && $scope.duration.modal) {
                $scope.duration.modal = false;
            } else {
                var modalInstance = $uibModal.open({
                    controller: function ($uibModalInstance, $scope, duration) {
                        $scope.duration = duration;
                        $scope.modalSubmit = function () {
                            $scope.duration.modal = true;
                            $scope.duration.checked = true;
                            $uibModalInstance.close($scope.duration);
                        };

                        $scope.modalClose = function () {
                            $scope.duration.modal = false;
                            $scope.duration.checked = false;
                            $uibModalInstance.close($scope.duration);
                        };

                    },
                    templateUrl: 'templates/include.proses.duration.modal.tpl.html',
                    resolve: {
                        duration: function () {
                            return $scope.duration;
                        }
                    }
                });
                modalInstance.result.then(function (modelResult) {
                    $scope.duration = modelResult;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            }
        }
    };

    return durationModalService;
}]);
