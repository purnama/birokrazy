/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.factory('DepartmentService', ['$http', '$constant', '$localStorage', function ($http, $constant, $localStorage) {
    var restConfig = $localStorage.authenticated ? {
        headers: {
            authorization: "Bearer " + $localStorage.token.access_token
        }
    } : {};
    var departmentService = {
        findAll: function () {
            return $http.get($constant.apiVersion.public + '/department').then(function (response) {
                return response.data;
            });

        },
        findById: function (id) {
            return $http.get($constant.apiVersion.public + '/department/' + id).then(function (response) {
                return response.data;
            });

        },
        findAllReviewById: function (id) {
            return $http.get($constant.apiVersion.public + '/department/' + id + '/review').then(function (response) {
                return response.data;
            });

        },
        create: function(departmentObj){
            return $http.put($constant.apiVersion.protected + '/department' , departmentObj, restConfig).then(function (response) {
                return response.data;
            });
        },
        update: function(id, departmentObj){
            return $http.post($constant.apiVersion.protected + '/department/' + id , departmentObj, restConfig).then(function (response) {
                return response.data;
            });
        },
        delete: function(id){
            return $http.delete($constant.apiVersion.protected + '/department/' + id , restConfig).then(function (response) {
                return response.data;
            });
        },
        saveReview: function(id, reviewObj){
            return $http.put($constant.apiVersion.protected + '/department/' + id + '/review', reviewObj, restConfig).then(function (response) {
                return response.data;
            });
        }
    };
    return departmentService;
}]);
