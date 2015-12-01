/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
hackMdk3App.factory('HighchartService', [function () {
    var highchartService = {
        waitingTime: {
            chart: {
                type: 'line'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                title: {
                    text: 'Waiting Days'
                }
            },
            yAxis: {
                title: {
                    text: '%'
                }
            },
            series: [{
                name: 'DKI Jakarta',
                data: [5, 8, 12, 25, 16, 12, 8, 6, 4, 2]
            }, {
                name: 'Jawa Timur',
                data: [1, 10, 15, 15, 26, 12, 10, 3, 2, 2]
            }, {
                name: 'Sulawesi Utara',
                data: [2, 4, 10, 15, 13, 22, 6, 3, 4, 5]
            }, {
                name: 'Kalimantan Timur',
                data: [2, 5, 9, 15, 17, 21, 12, 6, 5, 2]
            }, {
                name: 'Papua Barat',
                data: [3, 6, 8, 15, 18, 16, 5, 8, 7, 2]
            }]
        }
    };

    return highchartService;
}]);
