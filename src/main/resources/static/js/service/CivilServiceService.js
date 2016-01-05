/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.factory('CivilServiceService', ['$http', '$constant', '$localStorage', function ($http, $constant, $localStorage) {
    var restConfig = $localStorage.authenticated ? {
        headers: {
            authorization: "Bearer " + $localStorage.token.access_token
        }
    } : {};
    var civilServiceService = {
        findAll: function () {
            return $http.get($constant.apiVersion.public + '/service').then(function (response) {
                return response.data;
            });

        },
        findById: function (id) {
            return $http.get($constant.apiVersion.public + '/service/' + id).then(function (response) {
                return response.data;
            });

        },
        findAllReviewById: function (id) {
            return $http.get($constant.apiVersion.public + '/service/' + id + '/review').then(function (response) {
                return response.data;
            });

        },
        create: function(civilServiceObj){
            return $http.put($constant.apiVersion.protected + '/service' , civilServiceObj, restConfig).then(function (response) {
                return response.data;
            });
        },
        update: function(id, civilServiceObj){
            return $http.post($constant.apiVersion.protected + '/service/' + id , civilServiceObj, restConfig).then(function (response) {
                return response.data;
            });
        },
        delete: function(id){
            return $http.delete($constant.apiVersion.protected + '/service/' + id , restConfig).then(function (response) {
                return response.data;
            });
        },
        saveReview: function(id, reviewObj){
            return $http.put($constant.apiVersion.protected + '/service/' + id + '/review', reviewObj, restConfig).then(function (response) {
                return response.data;
            });
        }
    };
    return civilServiceService;
}]);
