app.controller('SampleController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$state', '$helpers', '$systemUrls','$stateParams', sampleController]);

function sampleController($scope, $rootScope, $state, $timeout, $http, $state, $helpers, $systemUrls, $stateParams) {
    console.log("sample report one controller started");

    //debugger
    $scope.reportName = $stateParams.reportName;
    $scope.reportDisplay = $stateParams.DisplayName;

    $scope.openURL = function () {
        if ($scope.reportName == "report1") {
            window.open('http://ostriosvr1:Ostr10Svr123@104.45.142.25/ReportServer_SQLEXPRESS2014/Pages/ReportViewer.aspx?%2fOstrio_Reports%2fSampleReport1&rs:Command=Render', '_blank')
        }else if($scope.reportName == "report2"){
            window.open('http://ostriosvr1:Ostr10Svr123@104.45.142.25/ReportServer_SQLEXPRESS2014/Pages/ReportViewer.aspx?%2fOstrio_Reports%2fSampleReport2&rs:Command=Render', '_blank')
        }
    }

    //$scope.getReport();
}