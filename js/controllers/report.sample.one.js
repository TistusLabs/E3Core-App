app.controller('SampleOneController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$state', '$helpers', '$systemUrls', sampleoneController]);

function sampleoneController($scope, $rootScope, $state, $timeout, $http, $state, $helpers, $systemUrls) {
    console.log("User Administration app started");

    $http.defaults.headers.common['Authorization'] = 'Basic ostriosvr1:Ostr10Svr123';

    // $scope.getReport = function () {
    //     debugger
    //     var payload = {
    //         "UserName": $helpers.getCookie("UserName"),
    //         "SessionKey": $helpers.getCookie("SessionKey"),
    //         "securityToken": $helpers.getCookie("securityToken")
    //     };
    //     $http({
    //         method: "GET",
    //         url: "http://104.45.142.25/ReportServer_SQLEXPRESS2014/Pages/ReportViewer.aspx?%2fOstrio_Reports%2fSampleReport1&rs:Command=Render",
    //         data: payload,
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then(function (response, status) {
    //         debugger
    //         if (response.data) {
    //             $scope.allprojects = response.data.Projects;
    //         } else {
    //             alert("There was an error: " + response.data.Error.ErrorMessage);
    //         }
    //         console.log(response, status);
    //     }, function (response, status) {
    //         console.log(response, status);
    //     });
    // };

    //$scope.getReport();
}