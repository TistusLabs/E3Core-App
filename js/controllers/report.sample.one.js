app.controller('SampleOneController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$state', '$helpers', '$systemUrls', sampleoneController]);

function sampleoneController($scope, $rootScope, $state, $timeout, $http, $state, $helpers, $systemUrls) {
    console.log("sample report one controller started");

    //$http.defaults.headers.common['Authorization'] = 'Basic ostriosvr1:Ostr10Svr123';
    $scope.showIframe = false;
    $scope.getReport = function () {
        debugger
        $http({
            method: "GET",
            url: "http://ostriosvr1:Ostr10Svr123@104.45.142.25/ReportServer_SQLEXPRESS2014/Pages/ReportViewer.aspx?%2fOstrio_Reports%2fSampleReport1&rs:Command=Render"
        }).then(function (response, status) {
            debugger
            // $scope.iframeURL = "http://104.45.142.25/ReportServer_SQLEXPRESS2014/Pages/ReportViewer.aspx?%2fOstrio_Reports%2fSampleReport1&rs:Command=Render";
            $scope.showIframe = true;
        }, function (response, status) {
            debugger
            // $scope.iframeURL = "http://104.45.142.25/ReportServer_SQLEXPRESS2014/Pages/ReportViewer.aspx?%2fOstrio_Reports%2fSampleReport1&rs:Command=Render";
            $scope.showIframe = true;
        });
    };

    $scope.getReport();
}