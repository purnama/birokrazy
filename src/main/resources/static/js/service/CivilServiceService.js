/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.factory('CivilServiceService', ['$http', '$constant', function ($http, $constant) {

    var civilServiceService = {
        findAll: function () {
            return$http.get($constant.apiVersion.public + '/civil-service').then(function (response) {
                return response.data;
            });

        },
        findById: function (id) {
            return $http.get($constant.apiVersion.public + '/civil-service/' + id).then(function (response) {
                return response.data;
            });

        },
        findAllReviewById: function (id) {
            return $http.get($constant.apiVersion.public + '/civil-service/' + id + '/review').then(function (response) {
                return response.data;
            });

        },
        saveReview: function(id, reviewObj){
            return $http.put($constant.apiVersion.protected + '/civil-service/' + id + '/review', reviewObj).then(function (response) {
                return response.data;
            });
        }
    };
    return civilServiceService;
}]);
