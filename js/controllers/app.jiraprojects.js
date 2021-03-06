app.controller('JIRAController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$state', '$helpers', '$systemUrls', jiraController]);

function jiraController($scope, $rootScope, $state, $timeout, $http, $state, $helpers, $systemUrls) {
    console.log("User Administration app started");

    $scope.allprojects = [];

    $scope.getAllProjects = function () {
        //debugger
        var payload = {
            "UserName": $helpers.getCookie("UserName"),
            "SessionKey": $helpers.getCookie("SessionKey"),
            "securityToken": $helpers.getCookie("securityToken")
        };
        $http({
            method: "POST",
            url: $systemUrls.svc_access + "/E3CoreUser/User.svc/GetAllJiraProjects",
            dataType: 'json',
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            //debugger
            if (response.data) {
                $scope.allprojects = response.data.Projects;
            } else {
                alert("There was an error: " + response.data.Error.ErrorMessage);
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
        });
    };

    $scope.getAllProjects();
}