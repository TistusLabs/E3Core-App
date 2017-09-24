app.controller('UserAdministration', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$state', '$helpers', '$systemUrls', userAdministration]);

function userAdministration($scope, $rootScope, $state, $timeout, $http, $state, $helpers, $systemUrls) {
    console.log("User Administration app started");

    $scope.user = {};

    $scope.setUserImage = function (file) {
        debugger
    }

    $scope.getJIRASession = function () {
        debugger
        var payload = {
            "username": user.email,
            "password": user.fname
        };
        $http({
            method: "POST",
            url: $systemUrls.jiraAccessAPI,
            dataType: 'json',
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            if (response.data) {
                alert("User added successfully");
                $scope.user = {};
            } else {
                alert("There was an error: " + response.data.Error.ErrorMessage);
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
        });
    };
}