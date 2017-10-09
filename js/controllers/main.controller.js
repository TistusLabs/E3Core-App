app.controller('MainController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$state', '$helpers', '$systemUrls', mainController]);

function mainController($scope, $rootScope, $state, $timeout, $http, $state, $helpers, $systemUrls) {
    console.log("Application started");

    $scope.currentYear = new Date();
    $scope.mainMenu = [];

    $scope.byteTobase64 = function (buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    };

    $scope.getCurrentProfile = function () {
        var payload = {
            "UserName": $helpers.getCookie("UserName"),
            "SessionKey": $helpers.getCookie("SessionKey"),
            "securityToken": $helpers.getCookie("securityToken")
        }
        $http({
            method: "POST",
            url: $systemUrls.svc_access + "/E3CoreUser/User.svc/GetUser",
            dataType: 'json',
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            //debugger
            if (response.data != null) {
                $rootScope.profileDetails = response.data;
                $rootScope.profileDetails.userImage = $scope.byteTobase64($rootScope.profileDetails.Avatar);
            } else if (response.data.Error != null) {
                alert("There was an error: " + response.data.Error.ErrorMessage);
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
        });
    }
    $scope.getCurrentProfile();

    $scope.getMainMenuItems = function () {
        $http({
            url: "././json/main-menu.json",
            dataType: "json",
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, X-Requested-With",
                "Content-Type": "text/json"
            }
        }).then(function (response) {
            //debugger
            $scope.mainMenu = response.data;
        }, function (e) {
            console.log("Error loading main menu items", e);
        });
    };
    $scope.getMainMenuItems();

    $scope.loginURL = "";
    $scope.navigateToState = function (location, mainitem) {
        //debugger
        console.log("Navigating to URL: ", location);
        var locationPath = location.path;
        var locationParrams = {};
        if (mainitem != null) {
            if (mainitem.name == "reports") {
                locationParrams = { "reportName": location.name, "DisplayName": location.displayName }
            }
            if (mainitem.name == "screens") {
                locationParrams = { "loginDirectory": location.name }
            }
        }
        $state.go(locationPath, locationParrams);
        //$state.transitionTo(locationPath);

        if (locationPath == "dashboard") {
            $timeout(function () {
                $scope.DrawCharts();
            }, 0);
        }
    };

    $scope.logoutSession = function () {
        //debugger
        var payload = {};
        payload.UserName = $helpers.getCookie("UserName");
        payload.SessionKey = $helpers.getCookie("SessionKey");
        $http({
            method: "POST",
            url: $systemUrls.svc_access + "/E3CoreUser/User.svc/Logout",
            dataType: 'json',
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            //debugger
            if (response.data.Response) {
                $helpers.removeCookie("UserName");
                $helpers.removeCookie("SessionKey");
                $helpers.removeCookie("securityToken");
                window.location.href = "auth/";
            } else if (response.data.Error != null) {
                alert("There was an error: " + response.data.Error.ErrorMessage);
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
        });
    };

    //debugger
    $scope.DrawCharts = function () {
        google.charts.load('current', { 'packages': ['corechart', 'line'] });
        google.charts.setOnLoadCallback(LoadAreaChart);
        google.charts.setOnLoadCallback(LoadLineChart);
        google.charts.setOnLoadCallback(PieChartOne);
        google.charts.setOnLoadCallback(PieChartTwo);
    }

    function LoadAreaChart() {
        var data = google.visualization.arrayToDataTable([
            ['Month', 'Sales', 'Expenses'],
            ['Jan', 1000, 400],
            ['Feb', 1170, 460],
            ['Mar', 660, 1120],
            ['Apr', 1030, 540],
            ['May', 35, 67],
            ['Jun', 555, 346],
            ['Jul', 532, 545],
            ['Aug', 465, 657],
            ['Sep', 3457, 755],
            ['Oct', 447, 667],
            ['Nov', 883, 887],
            ['Dec', 578, 556]
        ]);

        var options = {
            hAxis: { title: 'Month', titleTextStyle: { color: '#333' } },
            vAxis: { minValue: 0 },
            curveType: 'function'
        };

        var chart = new google.visualization.AreaChart(document.getElementById('area_chart'));
        chart.draw(data, options);
    }

    function LoadLineChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('number', 'X');
        data.addColumn('number', 'Services');

        data.addRows([
            [0, 0], [1, 10], [2, 23], [3, 17], [4, 18], [5, 9],
            [6, 11], [7, 27], [8, 33], [9, 40], [10, 32], [11, 35],
            [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
            [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
            [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
            [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
            [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
            [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
            [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
            [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
            [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
            [66, 70], [67, 72], [68, 75], [69, 80]
        ]);

        var options = {
            hAxis: {
                title: 'Time'
            },
            vAxis: {
                title: 'Usage'
            },
            curveType: 'function',
            animation: {
                duration: 2000,
                startup: true,
                easing: "inAndOut"
            }
        };

        var chart = new google.charts.Line(document.getElementById('line_chart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
    }

    function PieChartOne() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Pizza');
        data.addColumn('number', 'Populartiy');
        data.addRows([
            ['Pepperoni', 33],
            ['Hawaiian', 26],
            ['Mushroom', 22],
            ['Sausage', 10], // Below limit.
            ['Anchovies', 9] // Below limit.
        ]);

        var options = {
            title: 'Work assigned by Team member',
            sliceVisibilityThreshold: .2
        };

        var chart = new google.visualization.PieChart(document.getElementById('pie_chart_one'));
        chart.draw(data, options);
    }

    function PieChartTwo() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Tasks');
        data.addColumn('number', 'No.');
        data.addRows([
            ['Done', 33],
            ['Inprogress', 26]
        ]);

        var options = {
            title: 'Done vs In progress',
            sliceVisibilityThreshold: .2
        };

        var chart = new google.visualization.PieChart(document.getElementById('pie_chart_two'));
        chart.draw(data, options);
    }

    $scope.DrawCharts();


}