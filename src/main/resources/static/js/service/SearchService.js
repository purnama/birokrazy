/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.factory('SearchService', ['$http', '$constant', '$localStorage', function ($http, $constant, $localStorage) {

    var searchService = {
        searchServiceOrDepartment: function (serviceOrDepartment) {
            return $http.get($constant.apiVersion.public + '/search/serviceOrDepartment', {params: {query: serviceOrDepartment}}).then(function (response) {
                return response.data;
            });

        },
        searchLocation: function (location) {
            return $http.get($constant.apiVersion.public + '/search/location', {params: {query: location}}).then(function (response) {
                return response.data;
            });

        }
    };
    return searchService;
}]);
